import CustomImg from "../custom/CustomImg";

type ContentsCardProps = {
  items: Array<{ img: string, title: string, description: string }>;
}

/**
 * 컨텐츠 카드 컴포넌트
 *
 * @param {Array} items - 컨텐츠 카드 리스트
 * @returns {JSX.Element} - 컨텐츠 카드 컴포넌트 반환
 */
export default function ContentsCard(
  { items }: ContentsCardProps
) {
  return (
    <div className='about-box'>
      {items.map((item, idx) => (
        <div
          key={idx}
          className='about-card'
          data-aos={'fade-right'}
          data-aos-delay={`${idx * 200}`}
          data-aos-duration='1000'
        >
          <CustomImg
            className='img'
            src={item.img}
            alt={item.title}
            fill
          />
          <div className='text'>
            <div className='title'>
              {item.title}
            </div>
            <div className='description'>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
