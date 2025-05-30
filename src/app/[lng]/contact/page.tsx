'use client'

import { useState } from 'react';
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
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'サービス', label: 'サービス' },
    { value: '提携・相談', label: '提携・相談' },
    { value: '技術サポート', label: '技術サポート' },
    { value: '採用関連', label: '採用関連' },
    { value: 'その他', label: 'その他' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://bdt95sp7b3.execute-api.ap-northeast-1.amazonaws.com/send', {
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
        console.error('問い合わせの送信に失敗しました。', response.statusText);
      }
    } catch (error) {
      console.error('問い合わせの送信に失敗しました。', error);
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
              {`問い合わせ`}
            </Typography>
            <Typography sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              {`ご不明な点がありましたら、いつでもお問い合わせください`}
            </Typography>

            <StyledPaper>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'grid', gap: 3 }}>
                  <TextField
                    select
                    fullWidth
                    label={'問い合わせ内容'}
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
                    label={'会社名'}
                    name='company'
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                  <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
                    <TextField
                      fullWidth
                      label={'担当者名'}
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label={'メールアドレス'}
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label={'電話番号'}
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label={'詳細内容'}
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
                    {isSubmitting ? '送信中...' : '問い合わせ'}
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
              {`問い合わせが成功しました。`}
            </Alert>
          </Snackbar>
        </MuiProvider>
      </div>
    </article>
  );
}