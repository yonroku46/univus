'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { AvailableLanguages } from '@/i18n/settings';
import Loading from '@/app/[lng]/loading';
import '@/styles/pages/recruit.scss';

import { Alert, Box, Snackbar } from '@mui/material';
import MuiProvider from '@/styles/theme/MuiProvider';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function RecruitInfoPage(
  { params }: { params: Promise<{ lng: AvailableLanguages, positionId: string }> }
) {
  const { lng, positionId } = use(params);
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const breadcrumbs: Breadcrumb[] = [
    { label: '採用情報', href: '/recruit' },
    { label: position?.title || '求人詳細', href: `/recruit/${positionId}`, active: true },
  ];

  const mail = 'support@univus.jp';
  const benefitList = [
    'フレックスタイム制度',
    'リモートワーク制度（週3-5日）',
    '各種社会保険完備',
    '通勤手当（全額支給）',
    '各種休暇制度（年次有給・夏季・慶弔）',
    '健康診断（年1回）',
    '書籍購入、資格取得、カンファレンス参加費用支援',
    '社内イベント・懇親会',
    '各種手当（住宅手当・家族手当）',
  ]

  const handleCopy = async (mail: string) => {
    try {
      await navigator.clipboard.writeText(mail);
      setShowSuccess(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await fetch(`https://univus-jp.s3.ap-northeast-1.amazonaws.com/positions-ja.json`);
        const data = await response.json();
        const foundPosition = data.positions.find((p: Position) => String(p.id) === String(positionId));
        setPosition(foundPosition || null);
      } catch (error) {
        console.error('Error fetching position:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, [positionId]);

  if (isLoading) {
    return <Loading circular />
  }

  if (!position) {
    return (
      <article className='bg-sub'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="container center">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {`求人情報が\n見つかりませんでした`}
          </h1>
          <h2 style={{ margin: '1rem 0', fontSize: '1.25rem', fontWeight: 'normal' }}>
            {`お手数ですが、採用情報一覧をもう一度ご確認ください`}
          </h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => router.replace('/')}
              style={{
                borderColor: '#eeeeee',
                backgroundColor: '#eeeeee',
                color: '#4a4a4a',
                padding: '0.5rem 1.25rem'
              }}
            >
              ホーム
            </button>
            <button
              onClick={() => router.replace('/recruit')}
              style={{
                borderColor: 'var(--accent-color)',
                backgroundColor: 'var(--accent-color)',
                color: '#fff',
                padding: '0.5rem 1.25rem'
              }}
            >
              採用情報一覧へ
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className='bg-sub'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='container recruit'>
        <MuiProvider>
          <Box sx={{ py: 4, width: '100%' }}>
            <button
              onClick={() => router.back()}
              style={{
                marginBottom: '2rem',
                padding: '0.5rem 1rem',
                background: 'none',
                border: '1px solid #ccc',
                backgroundColor: 'var(--bg-color)',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ← 戻る
            </button>

            <div className="position-detail">
              <div className="position-header">
                <div className="tags">
                  <span className="tag category">{position.category}</span>
                  <span className="tag">{position.employmentType}</span>
                  {position.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <h1>{position.title}</h1>
                <p className="limit">
                  <DateRangeIcon fontSize='small' />
                  {`期限：${position.limit}`}
                </p>
              </div>

              <div className="position-section">
                <h2>給与</h2>
                <p>{`【初年度想定年収】`}</p>
                <p>{`300万円～600万円`}</p>
                <p>{`※ 経験職種を考慮のうえ決定いたします。`}</p>
                <p>{`※ 試用期間3ヵ月あり（試用期間中も待遇に変更ありません）`}</p>
              </div>
              <div className="position-section">
                <h2>諸手当</h2>
                <p>{`休日勤務手当、深夜勤務手当、通勤交通費（当社運用基準により支給）、技能手当、扶養家族手当など`}</p>
              </div>
              <div className="position-section">
                <h2>昇給</h2>
                <p>{`年1回（4月）`}</p>
              </div>
              <div className="position-section">
                <h2>賞与</h2>
                <p>{`年2回（6月、12月）`}</p>
              </div>
              <div className="position-section">
                <h2>休日休暇</h2>
                <p>{`休日：完全週休2日制（土曜日・日曜日）、祝日、年末年始休日`}</p>
                <p>{`※ 年次有給休暇、特別休暇（結婚休暇、忌引休暇、子の看護等休暇、介護休暇等）`}</p>
              </div>
              <div className="position-section">
                <h2>勤務時間</h2>
                <p>{`9:00～18:00 `}</p>
                <p>{`※ 部署により時差出勤制度あり`}</p>
              </div>
              <div className="position-section">
                <h2>勤務地</h2>
                <p>{position.location}</p>
              </div>
              <div className="position-section">
                <h2>職務内容</h2>
                <p>{position.description}</p>
              </div>
              <div className="position-section">
                <h2>福利厚生</h2>
                <ul>
                  {benefitList.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="position-section">
                <h2>応募方法</h2>
                <p className='mail'>
                  {mail}
                  <button className='copy-button' onClick={() => handleCopy(mail)}>
                    <ContentCopyIcon fontSize='inherit' />
                  </button>
                </p>
                <p>{`応募は上記のメールアドレスに件名を「応募者名_応募職務名」として送信してください。`}</p>
                <p>{`【提出書類】`}</p>
                <p>{`　1．履歴書（必須）`}</p>
                <p>{`　2．職務経歴書（必須）`}</p>
                <p>{`　3．ポートフォリオ（必須）`}</p>
                <p>{`　4．その他アピールできるもの（任意）`}</p>
                <p>{`※ 各応募書類はPDF形式で提出するようお願いいたします。`}</p>
              </div>
              <div className="position-section">
                <h2>選考フロー</h2>
                <p className='selection-flow'>
                  {`書類選考`}
                  <ArrowRightIcon />
                  {`Web面接（1～2回）`}
                  <ArrowRightIcon />
                  {`内定`}
                </p>
              </div>
            </div>
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
              {`メールアドレスをコピーしました。`}
            </Alert>
          </Snackbar>
        </MuiProvider>
      </div>
    </article>
  );
}