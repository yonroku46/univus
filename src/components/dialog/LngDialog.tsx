'use clinet'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { i18n } from 'i18next';
import { useTranslation } from '@/i18n/client';
import { AvailableLanguages } from '@/i18n/settings';
import { convertLngCode } from '@/common/utils/LngUtils';

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
      sx={{
        '& .MuiDialog-paper': {
          fontFamily: 'inherit',
          borderRadius: '0.75rem',
        },
        '& .MuiTypography-root': {
          fontFamily: 'inherit',
        }
      }}
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
                <ListItemAvatar sx={{ display: 'flex' }}>
                  <Image
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
