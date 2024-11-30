import { createInstance, FlatNamespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { FallbackNs } from 'react-i18next'
import { getOptions, languages, fallbackLng, AvailableLanguages } from './settings'

const initI18next = async (lng: AvailableLanguages, ns: string | string[]) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  lng: AvailableLanguages,
  ns?: Ns,
  options: { keyPrefix?: KPrefix } = {}
) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns as string[] : ns as string)
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}
