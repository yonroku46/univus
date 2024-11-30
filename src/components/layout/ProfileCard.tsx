import Avatar from '@mui/material/Avatar';

type ProfileCardProps = {
  nickname: string;
  color: string;
  title: string;
  subTitle: string;
  intro: string;
}

/**
 * 프로필 카드 컴포넌트
 *
 * @param {Array} items - 프로필 카드 리스트
 * @returns {JSX.Element} - 프로필 카드 컴포넌트 반환
 */
export default function ProfileCard(
  { nickname, color, title, subTitle, intro }: ProfileCardProps
) {

  return (
    <div className='profile-card' data-aos='fade-up'>
      <div className='top'>
        <div className='profile'>
          <div className='title'>
            {title}
          </div>
          <div className='sub-title'>
            {subTitle}
          </div>
        </div>
        <Avatar sx={{ bgcolor: color }} aria-label='recipe'>
          {nickname}
        </Avatar>
      </div>
      <div className='intro'>
        {intro}
      </div>
    </div>
  )
}
