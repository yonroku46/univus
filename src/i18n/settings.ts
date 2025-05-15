export const fallbackLng = 'ja'
// export const languages = [fallbackLng, 'ko', 'en']
export const languages = [fallbackLng]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export type AvailableLanguages = typeof languages[number]

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
