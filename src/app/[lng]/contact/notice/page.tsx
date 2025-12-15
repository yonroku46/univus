'use client'

import { useEffect, useState, use } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import MuiProvider from '@/styles/theme/MuiProvider';
import Loading from '@/app/[lng]/loading';

import { Box, Typography, Paper, List, ListItem, Chip, Divider, styled } from '@mui/material';
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
  '& .notice-wrapper': {
    padding: theme.spacing(3),
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'var(--bg-color)',
    }
  },
  '& .notice-header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  '& .chips': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
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
  '& .clickable-area': {
    cursor: 'pointer'
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
      <div className='container center content-top'>
        <MuiProvider>
          <Box sx={{ py: 4, width: '100%' }}>
            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
              {`ニュース`}
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>
              {`Univusの新しいニュースをご確認ください`}
            </Box>
            <StyledPaper>
              <List disablePadding>
                {noticesList.length > 0 ?
                  noticesList.map((notice, idx) => (
                    <div key={notice.id}>
                      {idx > 0 && <Divider />}
                      <StyledListItem disablePadding>
                        <div className='notice-wrapper'
                          style={{
                            backgroundColor: selectedNotice === notice.id ? 'var(--bg-color)' : 'transparent',
                            width: '100%'
                          }}
                        >
                          <Box sx={{ width: '100%' }}>
                            <Box className='notice-header'>
                              <Box className='chips'>
                                <Chip
                                  label={`${noticeTypes[notice.type]}`}
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
                              </Box>
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
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNoticeClick(notice.id);
                                  }}
                                  className="clickable-area"
                                  sx={{
                                    color: 'text.primary',
                                    mb: selectedNotice === notice.id ? 1 : 0,
                                  }}
                                >
                                  {notice.title}
                                </Typography>
                                {selectedNotice === notice.id && (
                                  <Typography
                                    component="div"
                                    variant='body2'
                                    onClick={(e) => e.stopPropagation()}
                                    sx={{
                                      color: 'text.secondary',
                                      whiteSpace: 'pre-line',
                                      mt: 2,
                                      pb: 1,
                                      userSelect: 'text',
                                      '& a': {
                                        color: 'primary.main',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                          textDecoration: 'none'
                                        }
                                      }
                                    }}
                                  >
                                    {convertLinksToJSX(notice.content)}
                                  </Typography>
                                )}
                              </div>
                              <KeyboardArrowDownIcon
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNoticeClick(notice.id);
                                }}
                                className={`arrow-icon clickable-area ${selectedNotice === notice.id ? 'open' : ''}`}
                              />
                            </Box>
                          </Box>
                        </div>
                      </StyledListItem>
                    </div>
                  ))
                  :
                  <div className='center'>
                    <Typography variant='body1' sx={{ textAlign: 'center', padding: "1rem 0" }}>
                      {`表示するニュースがありません`}
                    </Typography>
                  </div>
                }
              </List>
            </StyledPaper>
          </Box>
        </MuiProvider>
      </div>
    </article>
  );
}