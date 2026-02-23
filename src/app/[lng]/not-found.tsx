import Link from 'next/link';

import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';

export default function NotFound() {
  return (
    <article>
      <div className='container not-found'>
        <div className='empty-page'>
          <div className='error-visual'>
            <div className='error-code'>
              <SentimentDissatisfiedSharpIcon className='error-icon' />
              <span className='error-code-number'>{'404'}</span>
            </div>
          </div>
          <div className='notice'>
            <h1 className='error-title'>
              {'ページが見つかりませんでした'}
            </h1>
            <p className='error-description'>
              {'お探しのページは存在しないか\n移動または削除された可能性があります'}
            </p>
            <Link href='/' className='back-home-btn'>
              <span>{'ホームに戻る'}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}