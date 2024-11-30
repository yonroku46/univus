'use client'

import { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import MuiProvider from '@/styles/theme/MuiProvider';
import Loading from '@/app/[lng]/loading';

import { Box, Typography, Paper, List, ListItem, ListItemButton, Chip, Divider, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  maxWidth: '800px',
  margin: '0 auto',
  overflow: 'hidden',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  '& .MuiListItemButton-root': {
    padding: theme.spacing(3),
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'var(--bg-color)',
    }
  },
  '& .notice-header': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  '& .notice-date': {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
  },
  '& .notice-content': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  '& .arrow-icon': {
    transition: 'transform 0.2s ease',
    marginLeft: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  '& .arrow-icon.open': {
    transform: 'rotateX(180deg)',
  }
}));

export default function NoticePage(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'navigation');

  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const [noticesList, setNoticesList] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const dummy = [
      {
        id: 1,
        title: '히루쿠루 서비스 개선 안내',
        content: '더 나은 서비스 제공을 위해 다음과 같이 개선되었습니다.',
        date: '2024.03.20',
        isNew: true,
        type: '서비스',
      },
      {
        id: 2,
        title: '개인정보처리방침 개정 안내',
        content: '개인정보처리방침이 다음과 같이 개정될 예정입니다.',
        date: '2024.03.15',
        isNew: false,
        type: '안내',
      },
      {
        id: 3,
        title: '2024년 설 연휴 고객센터 운영 안내',
        content: '설 연휴 기간 고객센터 운영시간이 조정됩니다.',
        date: '2024.02.05',
        isNew: false,
        type: '안내',
      },
    ];
    setNoticesList(dummy);
    async function fetchNotices() {
      try {
        const response = await fetch('https://my-bucket.s3.region.amazonaws.com/notices.json');
        const data = await response.json();
        setNoticesList(data.notices);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotices();
  }, []);


  const handleNoticeClick = (id: number) => {
    setSelectedNotice(selectedNotice === id ? null : id);
  };

  if (isLoading) {
    return <Loading circular />
  }

  return (
    <article className='bg-sub'>
      <div className='container center content-top'>
        <MuiProvider>
          <Box sx={{ py: 4, width: '100%' }}>
            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
              공지사항
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              Univus의 새로운 소식을 확인하세요
            </Box>
            <StyledPaper>
              <List disablePadding>
                {noticesList.map((notice, idx) => (
                  <div key={notice.id}>
                    {idx > 0 && <Divider />}
                    <StyledListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleNoticeClick(notice.id)}
                        sx={{
                          backgroundColor: selectedNotice === notice.id ? 'var(--bg-color)' : 'transparent'
                        }}
                      >
                        <Box sx={{ width: '100%' }}>
                          <Box className='notice-header'>
                            <Chip
                              label={notice.type}
                              size='small'
                              sx={{
                                backgroundColor: 'var(--main-color)',
                                color: 'white',
                                fontWeight: 600,
                                px: 1
                              }}
                            />
                            {notice.isNew && (
                              <Chip
                                label='NEW'
                                size='small'
                                sx={{
                                  backgroundColor: '#FF4E4E',
                                  color: 'white',
                                  fontWeight: 600,
                                  px: 1
                                }}
                              />
                            )}
                            <Typography
                              component="span"
                              variant='body2'
                              className='notice-date'
                            >
                              {notice.date}
                            </Typography>
                          </Box>
                          <Box className='notice-content'>
                            <div>
                              <Typography
                                component="div"
                                variant='subtitle1'
                                sx={{
                                  color: 'text.primary',
                                  mb: selectedNotice === notice.id ? 1 : 0
                                }}
                              >
                                {notice.title}
                              </Typography>
                              {selectedNotice === notice.id && (
                                <Typography
                                  component="div"
                                  variant='body2'
                                  sx={{
                                    color: 'text.secondary',
                                    whiteSpace: 'pre-line',
                                    mt: 2,
                                    pb: 1
                                  }}
                                >
                                  {notice.content}
                                </Typography>
                              )}
                            </div>
                            <KeyboardArrowDownIcon
                              className={`arrow-icon ${selectedNotice === notice.id ? 'open' : ''}`}
                            />
                          </Box>
                        </Box>
                      </ListItemButton>
                    </StyledListItem>
                  </div>
                ))}
              </List>
            </StyledPaper>
          </Box>
        </MuiProvider>
      </div>
    </article>
  );
}