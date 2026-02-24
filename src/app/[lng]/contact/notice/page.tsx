'use client'

import { useEffect, useState, use } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import MuiProvider from '@/styles/theme/MuiProvider';
import Loading from '@/app/[lng]/loading';

import { Box, Typography, Chip, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
  '& @keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  }
}));

const fadeInStyle = {
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  }
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'ニュース', href: '/contact/notice', active: true },
];

export default function NoticePage(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const [noticesList, setNoticesList] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const noticeTypes = {
    'service': 'サービス',
    'info': 'お知らせ'
  }

  function convertLinksToJSX(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  }

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await fetch(`https://univus-jp.s3.ap-northeast-1.amazonaws.com/notices-ja.json`);
        const data = await response.json();
        setNoticesList(data.notices);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotices();
  }, [lng]);

  const handleNoticeClick = (id: number) => {
    setSelectedNotice(selectedNotice === id ? null : id);
  };

  if (isLoading) {
    return <Loading circular />
  }

  return (
    <article className='bg-sub'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='container center content-top'>
        <MuiProvider>
          <Box sx={{ py: 4, width: '100%' }}>
            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
              {`ニュース`}
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              {`Univusの新しいニュースをご確認ください`}
            </Box>
            <StyledContainer sx={fadeInStyle}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {noticesList.length > 0 ?
                  noticesList.map((notice) => (
                    <Box
                      key={notice.id}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        border: '1px solid',
                        borderColor: selectedNotice === notice.id ? 'var(--main-color)' : 'rgba(0,0,0,0.06)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        boxShadow: selectedNotice === notice.id 
                          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        '&:hover': {
                          borderColor: 'var(--main-color)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        }
                      }}
                    >
                      <Box
                        className="clickable-area"
                        onClick={() => handleNoticeClick(notice.id)}
                        sx={{
                          padding: { xs: 2.5, sm: 3 },
                          cursor: 'pointer',
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box className='chips' sx={{ display: 'flex', gap: 1 }}>
                            <Chip
                              label={noticeTypes[notice.type]}
                              size='small'
                              sx={{
                                backgroundColor: selectedNotice === notice.id ? 'var(--main-color)' : 'rgba(0,0,0,0.05)',
                                color: selectedNotice === notice.id ? 'white' : 'text.primary',
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                height: '24px',
                                transition: 'all 0.3s'
                              }}
                            />
                            {notice.isNew && (
                              <Chip
                                label='NEW'
                                size='small'
                                sx={{
                                  backgroundColor: '#FFEBEE',
                                  color: '#FF4E4E',
                                  fontWeight: 800,
                                  fontSize: '0.7rem',
                                  height: '24px',
                                }}
                              />
                            )}
                          </Box>
                          <Typography
                            variant='body2'
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.875rem',
                              fontWeight: 500
                            }}
                          >
                            {notice.date}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
                          <Typography
                            variant='h6'
                            component="div"
                            sx={{
                              fontSize: { xs: '1rem', sm: '1.125rem' },
                              fontWeight: 700,
                              lineHeight: 1.4,
                              color: 'text.primary',
                              flex: 1
                            }}
                          >
                            {notice.title}
                          </Typography>
                          <KeyboardArrowDownIcon
                            sx={{
                              ml: 2,
                              color: 'text.secondary',
                              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: selectedNotice === notice.id ? 'rotate(180deg)' : 'rotate(0deg)',
                              opacity: 0.6
                            }}
                          />
                        </Box>

                        {selectedNotice === notice.id && (
                          <Box
                            sx={{
                              mt: 3,
                              pt: 3,
                              borderTop: '1px solid rgba(0,0,0,0.06)',
                              animation: 'fadeIn 0.4s ease-out'
                            }}
                          >
                            <Typography
                              component="div"
                              variant='body1'
                              onClick={(e) => e.stopPropagation()}
                              sx={{
                                color: 'text.secondary',
                                whiteSpace: 'pre-line',
                                lineHeight: 1.7,
                                fontSize: '0.95rem',
                                userSelect: 'text',
                                textAlign: 'left',
                                '& a': {
                                  color: 'primary.main',
                                  fontWeight: 600,
                                  textDecoration: 'none',
                                  borderBottom: '2px solid rgba(0,0,0,0.1)',
                                  transition: 'all 0.2s',
                                  '&:hover': {
                                    borderBottomColor: 'primary.main',
                                  }
                                }
                              }}
                            >
                              {convertLinksToJSX(notice.content)}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))
                  :
                  <Box sx={{ py: 8, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '20px' }}>
                    <Typography variant='body1' sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {`表示するニュースがありません`}
                    </Typography>
                  </Box>
                }
              </Box>
            </StyledContainer>
          </Box>
        </MuiProvider>
      </div>
    </article>
  );
}