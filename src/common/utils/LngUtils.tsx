import { AvailableLanguages, languages } from '@/i18n/settings';

const code = {
  flagcdn: {
    ja: 'JP',
    ko: 'KR',
    en: 'GB',
  },
  locale: {
    ja: 'ja',
    ko: 'ko',
    en: 'en',
  },
  label: {
    ja: '日本語',
    ko: '한국어',
    en: 'English',
  }
};

type CodeType = keyof typeof code;
type CodeValues = typeof code[CodeType];
type LanguageCode = keyof CodeValues;

export function convertLngCode(lng: AvailableLanguages, type: CodeType): string {
  const typeCode = code[type];
  return typeCode[lng as LanguageCode];
}

export function removeLngPrefix(path: string) {
  const regex = new RegExp(`^/(${languages.join('|')})`);
  return path.replace(regex, '') || '';
};