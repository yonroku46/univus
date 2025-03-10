'use client'

import { useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import MuiProvider from '@/styles/theme/MuiProvider';

import { styled } from '@mui/material/styles';
import { TextField, MenuItem, Button, Paper, Box, Typography, Alert, Snackbar } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '16px',
  maxWidth: '800px',
  margin: '0 auto',
  padding: 0,
  background: 'var(--bg-sub-color)',
  boxShadow: 'unset',
  '& .MuiInputBase-root': {
    backgroundColor: 'var(--bg-color)',
  },
  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: 'var(--bg-color)',
  },
  '& .MuiInputBase-root:hover': {
    backgroundColor: 'var(--bg-color)',
  }
}));

interface ContactForm {
  type: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: ContactForm = {
  type: '',
  company: '',
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'contact');

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const inquiryTypes = [
    { value: t('contact.types.service'), label: t('contact.types.service') },
    { value: t('contact.types.partnership'), label: t('contact.types.partnership') },
    { value: t('contact.types.technical'), label: t('contact.types.technical') },
    { value: t('contact.types.other'), label: t('contact.types.other') },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://alxumyekmg.execute-api.ap-northeast-1.amazonaws.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setShowSuccess(true);
        setForm(initialForm);
      } else {
        console.error(t('contact.submit.error'), response.statusText);
      }
    } catch (error) {
      console.error(t('contact.submit.error'), error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className='bg-sub'>
      <div className='container center'>
        <MuiProvider>
          <Box sx={{ py: 4,  width: { xs: '100%', sm: 'auto' } }}>
            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
              {t('contact.title')}
            </Typography>
            <Typography sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              {t('contact.subTitle')}
            </Typography>

            <StyledPaper>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'grid', gap: 3 }}>
                  <TextField
                    select
                    fullWidth
                    label={t('contact.label.types')}
                    name='type'
                    value={form.type}
                    onChange={handleChange}
                    required
                  >
                    {inquiryTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label={t('contact.label.company')}
                    name='company'
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                  <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
                    <TextField
                      fullWidth
                      label={t('contact.label.name')}
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label={t('contact.label.email')}
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label={t('contact.label.phone')}
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label={t('contact.label.message')}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={10}
                    required
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    disabled={isSubmitting}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: '12px',
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      }
                    }}
                  >
                    {isSubmitting ? t('contact.submit.loading') : t('contact.submit.button')}
                  </Button>
                </Box>
              </form>
            </StyledPaper>
          </Box>

          <Snackbar
            open={showSuccess}
            autoHideDuration={6000}
            onClose={() => setShowSuccess(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={() => setShowSuccess(false)}
              severity='success'
              sx={{ width: '100%' }}
            >
              {t('contact.submit.success')}
            </Alert>
          </Snackbar>
        </MuiProvider>
      </div>
    </article>
  );
}