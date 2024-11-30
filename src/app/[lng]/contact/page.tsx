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
  const { t } = useTranslation(lng, 'navigation');

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'service', label: '서비스 문의' },
    { value: 'partnership', label: '제휴 문의' },
    { value: 'technical', label: '기술 지원' },
    { value: 'other', label: '기타 문의' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API 호출 로직 구현(임시 딜레이 적용)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setForm(initialForm);
    } catch (error) {
      console.error('문의 제출 실패:', error);
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
              문의하기
            </Typography>
            <Typography sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              궁금하신 점이 있으시다면 언제든 문의해주세요
            </Typography>

            <StyledPaper>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'grid', gap: 3 }}>
                  <TextField
                    select
                    fullWidth
                    label='문의 유형'
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
                    label='회사명'
                    name='company'
                    value={form.company}
                    onChange={handleChange}
                    required
                  />

                  <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
                    <TextField
                      fullWidth
                      label='담당자명'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label='이메일'
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Box>

                  <TextField
                    fullWidth
                    label='연락처'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label='문의 내용'
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
                    {isSubmitting ? '제출 중...' : '문의하기'}
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
              문의가 성공적으로 접수되었습니다.
            </Alert>
          </Snackbar>
        </MuiProvider>
      </div>
    </article>
  );
}