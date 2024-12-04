'use client';

import { useEffect, useState } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import { useTranslation } from '@/i18n/client';

import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function ServiceInfoPage(
  { params: { lng } }: { params: { lng: AvailableLanguages } }
) {
  const { t } = useTranslation(lng, 'project');

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
    { icon: InsightsOutlinedIcon, title: t('project.service.seller.benefit.item1'), description: t('project.service.seller.benefit.description1') },
    { icon: AddBusinessOutlinedIcon, title: t('project.service.seller.benefit.item2'), description: t('project.service.seller.benefit.description2') },
    { icon: ThumbUpOffAltOutlinedIcon, title: t('project.service.seller.benefit.item3'), description: t('project.service.seller.benefit.description3') }
  ];

  const buyerBenefits = [
    { icon: LocalDiningOutlinedIcon, title: t('project.service.buyer.benefit.item1'), description: t('project.service.buyer.benefit.description1') },
    { icon: TaskAltOutlinedIcon, title: t('project.service.buyer.benefit.item2'), description: t('project.service.buyer.benefit.description2') },
    { icon: ThumbUpOffAltOutlinedIcon, title: t('project.service.buyer.benefit.item3'), description: t('project.service.buyer.benefit.description3') }
  ];

  return (
    <article>
      <div className='project-main'>
        <div className='container'>
          <h2 className='section-title'>
            <span className='app-name'>{t('project.service.name')}</span>
            {t('project.service.description')}
          </h2>
          <div className='type-select'>
            <div
              className={`type-select-item ${userType === 'seller' ? 'selected' : ''}`}
              onClick={() => setUserType('seller')}
            >
              <div className='type-select-item-title'>
                <span className='type-select-item-title-en'>Seller</span>
                {t('project.service.seller.title')}
              </div>
            </div>
            <div
              className={`type-select-item ${userType === 'buyer' ? 'selected' : ''}`}
              onClick={() => setUserType('buyer')}
            >
              <div className='type-select-item-title'>
                <span className='type-select-item-title-en'>Buyer</span>
                {t('project.service.buyer.title')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='project-detail'>
        <div className='container'>

          <div className='service-benefit'>
            <h2>{userType === 'seller' ? t('project.service.seller.benefit.title') : t('project.service.buyer.benefit.title')}</h2>
            <div className='card'>
              {(userType === 'seller' ? sellerBenefits : buyerBenefits).map((benefit, index) => (
                <div key={index} className='card-item'>
                  <benefit.icon className='icon' />
                  <div className='title'>
                    {benefit.title}
                  </div>
                  <div className='description'>
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='service-method'>
            <h2>{t('project.service.method.title')}</h2>
            <div className='coming-soon'>
              <div className='sub-title'>
                Coming Soon
              </div>
              <div className='title'>
                {t('project.comingSoon')}
              </div>
            </div>
          </div>

          <div className='service-review'>
            <h2>{t('project.service.review.title')}</h2>
            <div className='coming-soon'>
              <div className='sub-title'>
                Coming Soon
              </div>
              <div className='title'>
                {t('project.comingSoon')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}