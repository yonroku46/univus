'use client';

import { useState } from 'react';

export default function ServiceInfoPage() {
  const [userType, setUserType] = useState<'seller' | 'buyer'>('seller');

  const sellerBenefits = [
    '더 많은 고객에게 도달하여 매출 증대',
    '간편한 주문 및 재고 관리 시스템',
    '효율적인 고객 피드백 수집'
  ];

  const buyerBenefits = [
    '다양한 도시락 옵션으로 선택의 폭 확대',
    '편리한 주문 및 안전한 결제 시스템',
    '빠르고 신뢰할 수 있는 배송 서비스'
  ];

  return (
    <article>
      <div className='project-main'>
        <div className='container'>
          <h2 className='section-title'>
            히루쿠루
          </h2>
          <p className='section-content'>
            {`주변의 도시락을 손쉽게 소개하고 만나보세요\n히루쿠루는 도시락 판매자와 구매자를 연결하여 더 나은 경험을 제공합니다`}
          </p>
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
          <div className='coming-soon'>
            <div className='sub-title'>
              Coming Soon
            </div>
            <div className='title'>
              상세내용은 준비중입니다...
            </div>
          </div>
          {/* <div className='card-container'>
            <h2>{userType === 'seller' ? '판매자 혜택' : '구매자 혜택'}</h2>
            <div className='card'>
              <ul>
                {(userType === 'seller' ? sellerBenefits : buyerBenefits).map((benefit, index) => (
                  <li key={index} className='card-item'>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </article>
  );
}