'use client';

import React, { useEffect, useState, use } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Loading from '@/app/[lng]/loading';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '@/styles/pages/notice.scss';

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  isNew: boolean;
  type: 'info' | 'service';
}

const breadcrumbs: Breadcrumb[] = [
  { label: 'ニュース', href: '/contact/notice', active: true },
];

export default function NoticePage({
  params,
}: {
  params: Promise<{ lng: AvailableLanguages }>;
}) {
  const { lng } = use(params);
  const [selectedNotice, setSelectedNotice] = useState<number | null>(null);
  const [noticesList, setNoticesList] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const noticeTypeLabels: Record<string, string> = {
    service: 'サービス',
    info: 'お知らせ',
  };

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
        const response = await fetch(
          `https://univus-jp.s3.ap-northeast-1.amazonaws.com/notices-ja.json`
        );
        const data = await response.json();
        setNoticesList(data.notices || []);
      } catch (error) {
        console.error('お知らせの取得に失敗しました:', error);
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
    return <Loading circular />;
  }

  return (
    <article className="bg-sub">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container center content-top">
        <div className="notice-section">
          <div className="notice-header">
            <h1 className="notice-title">ニュース</h1>
            <p className="notice-subtitle">
              Univusの新しいニュースをご確認ください
            </p>
          </div>

          <div className="notice-list">
            {noticesList.length > 0 ? (
              noticesList.map((notice) => {
                const isOpen = selectedNotice === notice.id;
                return (
                  <div
                    key={notice.id}
                    className={`notice-card ${isOpen ? 'is-open' : ''}`}
                  >
                    <div
                      className="notice-head"
                      onClick={() => handleNoticeClick(notice.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleNoticeClick(notice.id);
                        }
                      }}
                    >
                      <div className="meta-row">
                        <span className={`type-badge ${notice.type}`}>
                          {noticeTypeLabels[notice.type] || notice.type}
                        </span>
                        {notice.isNew && <span className="new-badge">NEW</span>}
                        <span className="notice-date">{notice.date}</span>
                      </div>

                      <div className="title-row">
                        <h2 className="notice-heading">{notice.title}</h2>
                        <span className={`toggle-arrow ${isOpen ? 'rotated' : ''}`}>
                          <KeyboardArrowDownIcon fontSize="small" />
                        </span>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="notice-body">
                        <div className="notice-content">
                          {convertLinksToJSX(notice.content)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="notice-empty">
                <p>表示するニュースがありません</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}