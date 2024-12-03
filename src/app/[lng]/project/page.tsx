'use client';

import { useEffect, useState } from 'react';

import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function ServiceInfoPage() {

  const [userType, setUserType] = useState<'seller' | 'buyer'>('seller');

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        once: true,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate'
      });
    });
  }, []);

  const sellerBenefits = [
    { icon: InsightsOutlinedIcon, title: '더 많은 고객에게 도달하여\n매출 증대' },
    { icon: AddBusinessOutlinedIcon, title: '간편한 주문 및\n재고 관리 시스템' },
    { icon: ThumbUpOffAltOutlinedIcon, title: '효율적인 고객\n피드백 수집' }
  ];

  const buyerBenefits = [
    { icon: LocalDiningOutlinedIcon, title: '다양한 도시락 옵션으로\n선택의 폭 확대' },
    { icon: TaskAltOutlinedIcon, title: '편리하고 효율적인\n식사경험' },
    { icon: ThumbUpOffAltOutlinedIcon, title: '신뢰할 수 있는\n실제 이용자의 후기' }
  ];

  return (
    <article>
      <div className='project-main'>
        <div className='container'>
          <h2 className='section-title'>
            <span className='app-name'>히루쿠루 </span>
            {`에서 점심시간 여유롭게,\n맛있게 경험해보세요!`}
          </h2>
          <div className='type-select'>
            <div
              className={`type-select-item ${userType === 'seller' ? 'selected' : ''}`}
              onClick={() => setUserType('seller')}
            >
              <div className='type-select-item-title'>
                <span className='type-select-item-title-en'>Seller</span>
                판매자
              </div>
            </div>
            <div
              className={`type-select-item ${userType === 'buyer' ? 'selected' : ''}`}
              onClick={() => setUserType('buyer')}
            >
              <div className='type-select-item-title'>
                <span className='type-select-item-title-en'>Buyer</span>
                구입자
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='project-detail'>
        <div className='container'>

          <div className='service-benefit'>
            <h2>{userType === 'seller' ? '판매자라면?\n이런점이 좋아요!' : '구매자라면?\n이런점이 좋아요!'}</h2>
            <div className='card'>
              {(userType === 'seller' ? sellerBenefits : buyerBenefits).map((benefit, index) => (
                <div key={index} className='card-item'>
                  <benefit.icon className='icon' />
                  {benefit.title}
                </div>
              ))}
            </div>
          </div>

          <div className='service-method'>
            <h2>{'서비스 이용방법'}</h2>
            <div className='coming-soon'>
              <div className='sub-title'>
                Coming Soon
              </div>
              <div className='title'>
                상세내용을 준비중입니다...
              </div>
            </div>
          </div>

          <div className='service-review'>
            <h2>{'이용후기'}</h2>
            <div className='coming-soon'>
              <div className='sub-title'>
                Coming Soon
              </div>
              <div className='title'>
                상세내용을 준비중입니다...
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}