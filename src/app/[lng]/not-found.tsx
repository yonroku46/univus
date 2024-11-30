import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';

export default function NotFound() {
  return (
    <article>
      <div className='container not-found'>
        <div className='empty-page'>
          <SentimentDissatisfiedSharpIcon className='icon' />
          <div className='notice'>
            <div className='code'>
              {'404'}
            </div>
            <div className='text'>
              {'This page could not be found.'}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}