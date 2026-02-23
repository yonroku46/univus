'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef, use } from 'react';
import { AvailableLanguages } from '@/i18n/settings';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import '@/styles/pages/recruit.scss';

import { Search } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiProvider from '@/styles/theme/MuiProvider';

const breadcrumbs: Breadcrumb[] = [
  { label: '採用情報', href: '/recruit', active: true },
];

export default function RecruitPage(
  { params }: { params: Promise<{ lng: AvailableLanguages }> }
) {
  const { lng } = use(params);
  const router = useRouter();

  const [positions, setPositions] = useState<Position[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filter>({
    category: '',
    employmentType: ''
  });
  const [dropdowns, setDropdowns] = useState({
    category: false,
    employmentType: false
  });
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['全ての職種', '開発', 'デザイン', 'マーケティング', '営業', '経営サポート'];
  const employmentTypes = ['全ての雇用形態', '正社員', '契約社員', '短期契約社員'];

  const filteredPositions = positions.filter(position => {
    const matchesSearch = searchQuery === '' ||
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      matchesSearch &&
      (filters.category === '' || position.category === filters.category) &&
      (filters.employmentType === '' || position.employmentType === filters.employmentType)
    );
  });

  const handleFilterChange = (type: keyof Filter, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value === `全ての${type === 'category' ? '職種' : '雇用形態'}` ? '' : value
    }));
    setDropdowns(prev => ({
      ...prev,
      [type]: false
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      employmentType: ''
    });
  };

  const handlePositionClick = (position: Position) => {
    router.push(`/recruit/${position.id}`);
  };

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(`https://univus-jp.s3.ap-northeast-1.amazonaws.com/positions-ja.json`);
        const data = await response.json();
        setPositions(data.positions);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };
    fetchPositions();
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      dropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node)) {
          setDropdowns(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: false
          }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <article className='bg-sub'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='container recruit'>
        <MuiProvider>
          <Box sx={{ py: 4,  width: '100%' }}>
            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
              採用情報
            </Typography>
            <Typography sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
              世界を変えるのは、あなたの「好き」から始まる
            </Typography>
            <div className='filter-wrapper'>
              <div className='search-section'>
                <div className='search-box'>
                  <Search className='search-icon' />
                  <input
                    type='text'
                    placeholder='興味のあるポジションを検索してください'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-input'
                  />
                </div>
              </div>
              <div className='filter-section'>
                <div className='filter-group' ref={el => {
                  dropdownRefs.current[0] = el;
                }}>
                  <button
                    className={`filter-button ${filters.category ? 'active' : ''}`}
                    onClick={() => setDropdowns(prev => ({
                      ...prev,
                      category: !prev.category,
                      employmentType: false
                    }))}
                  >
                    {filters.category || '全ての職種'}
                    {dropdowns.category ? <ArrowDropUpIcon className='icon' /> : <ArrowDropDownIcon className='icon' />}
                  </button>
                  {dropdowns.category && (
                    <div className='dropdown'>
                      {categories.map(category => (
                        <div
                          key={category}
                          className={`option ${filters.category === category ? 'active' : ''}`}
                          onClick={() => handleFilterChange('category', category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='filter-group' ref={el => {
                  dropdownRefs.current[1] = el;
                }}>
                  <button
                    className={`filter-button ${filters.employmentType ? 'active' : ''}`}
                    onClick={() => setDropdowns(prev => ({
                      ...prev,
                      employmentType: !prev.employmentType,
                      category: false
                    }))}
                  >
                    {filters.employmentType || '全ての雇用形態'}
                    {dropdowns.employmentType ? <ArrowDropUpIcon className='icon' /> : <ArrowDropDownIcon className='icon' />}
                  </button>
                  {dropdowns.employmentType && (
                    <div className='dropdown'>
                      {employmentTypes.map(type => (
                        <div
                          key={type}
                          className={`option ${filters.employmentType === type ? 'active' : ''}`}
                          onClick={() => handleFilterChange('employmentType', type)}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button className='reset-button' disabled={!filters.category && !filters.employmentType} onClick={resetFilters}>
                  初期化
                </button>
              </div>
            </div>
            {filteredPositions.length > 0 ? (
              <div className='position-list'>
                {filteredPositions.map(position => (
                  <div key={position.id} className='position-card' onClick={() => handlePositionClick(position)}>
                    <div className='position-info'>
                      <div className='category'>{position.category}</div>
                      <div className='limit'>{position.limit}</div>
                    </div>
                    <div className='position-title'>{position.title}</div>
                    <div className='tags'>
                      <div className='tag'>{position.employmentType}</div>
                      {position.tags.map(tag => (
                        <div key={tag} className='tag'>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='empty-positions'>
                <div className='count'>
                  現在募集中のポジションはありません。{'\n'}
                  お気軽にご連絡ください。
                </div>
                <Link href='/contact' className='contact-button'>
                  採用担当者に問い合わせる
                </Link>
              </div>
            )}
          </Box>
        </MuiProvider>
      </div>
    </article>
  );
}