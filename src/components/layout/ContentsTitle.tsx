type ContentsTitleProps = {
  description: string;
  title: string;
}

/**
 * 컨텐츠 타이틀 컴포넌트
 *
 * @param {string} description - 컨텐츠 부제목
 * @param {string} title - 컨텐츠 제목
 * @returns {JSX.Element} - 컨텐츠 타이틀 컴포넌트 반환
 */
export default function ContentsTitle(
  { description, title }: ContentsTitleProps
) {
  return (
    <div className='contents-title' data-aos='fade-down' >
      <div className='description' data-aos='fade-right' data-aos-delay='200'>
        {description}
      </div>
      <div className='title' data-aos='fade-right' data-aos-delay='200'>
        {title}
        <div
          className='title-accent'
          data-aos='fade-right'
        />
      </div>
    </div>
  )
}
