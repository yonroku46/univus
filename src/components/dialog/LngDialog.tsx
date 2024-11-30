'use clinet'

import { useRouter } from 'next/navigation';
import { i18n } from 'i18next';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { convertLngCode } from '@/common/utils/LngUtils';
import CustomImg from '@/components/custom/CustomImg';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Languages = {
  lng: AvailableLanguages;
  code: string;
  label: string;
}

type LngDialogProps = {
  i18n: i18n;
  lng: AvailableLanguages;
  path: string;
  open: boolean;
  onClose: () => void;
}

/**
 * 언어 선택 다이얼로그 컴포넌트
 *
 * @param {i18n} i18n - i18next 인스턴스
 * @param {AvailableLanguages} lng - 현재 선택된 언어 코드
 * @param {string} path - 현재 페이지 경로
 * @param {boolean} open - 다이얼로그의 열림 상태를 나타내는 플래그
 * @param {() => void} onClose - 다이얼로그를 닫는 함수
 * @returns {JSX.Element} - 언어 선택 다이얼로그 반환
 */
export default function LngDialog(
  { lng, path, open, onClose }: LngDialogProps
) {
  const { t } = useTranslation(lng, 'navigation');

  const languagesList: Array<Languages> = [
    { lng: 'ja', code: convertLngCode('ja', 'flagcdn'), label: convertLngCode('ja', 'label') },
    { lng: 'ko', code: convertLngCode('ko', 'flagcdn'), label: convertLngCode('ko', 'label') },
    { lng: 'en', code: convertLngCode('en', 'flagcdn'), label: convertLngCode('en', 'label') }
  ]

  const router = useRouter();
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const searchString = searchParams.toString();
  const searchQuery = searchString ? `?${searchString}` : '';

  const handleLngClick = (lng: AvailableLanguages) => {
    router.replace(`/${lng}${path}${searchQuery}`);
    onClose();
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'xs'}
      fullWidth={true}
      className='lng-dialog'
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
    >
      <DialogTitle className='title'>
        {t('languages.title')}
      </DialogTitle>
      <List sx={{ pt: 0, paddingBottom: '1.5rem' }}>
        {languagesList.map((languages) => (
          <ListItem
            disableGutters
            key={languages.code}
            className='select-item'
          >
            <div onClick={() => handleLngClick(languages.lng)}>
              <ListItemButton className='select-btn'>
                <ListItemAvatar>
                  <CustomImg
                    className='avatar'
                    src={`https://flagcdn.com/w40/${languages.code.toLowerCase()}.png`}
                    alt={languages.label}
                    width={30}
                    height={22}
                    priority
                  />
                </ListItemAvatar>
                <ListItemText primary={languages.label} />
                {languages.lng === lng && <CheckCircleIcon className='checked'/>}
              </ListItemButton>
            </div>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
