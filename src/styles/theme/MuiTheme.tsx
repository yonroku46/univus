import { Noto_Sans_KR, Noto_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700']
});
const notoSansEn = Noto_Sans ({
  weight: ['400','700'],
  subsets: ['latin'],
})

const mainColor = '#000';
const subColor = '#777777';
const bgColor = '#fff';
const accentColor = '#f95959';
const fontFamily = `${notoSansEn.style.fontFamily}, ${notoSansKR.style.fontFamily}`;

const muiTheme = createTheme({
  typography: {
    fontFamily: fontFamily
  },
  palette: {
    primary: {
      main: mainColor
    },
    text: {
      primary: mainColor
    },
    background: {
      default: bgColor
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: subColor,
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottomColor: subColor,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '1rem',
        },
        paperFullScreen: {
          borderRadius: '0',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '& > .MuiTab-iconWrapper': {
            marginBottom: '0',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '-1px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          alignSelf: 'center',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: subColor,
        },
        iconEmpty: {
          color: subColor,
        },
        iconFilled: {
          color: accentColor,
        }
      }
    }
  }
});

export default muiTheme;