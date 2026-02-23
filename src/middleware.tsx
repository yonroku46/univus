import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName, AvailableLanguages } from '@/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|docs|favicon.ico|sw.js).*)']
}

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1 || req.nextUrl.pathname.indexOf('view') > -1) return NextResponse.next()
  if (req.nextUrl.pathname === '/') {
    const url = new URL(`/${fallbackLng}`, req.url)
    url.search = req.nextUrl.search
    return NextResponse.redirect(url)
  }

  let lng: AvailableLanguages | undefined | null
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc: string) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    const url = new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    url.search = req.nextUrl.search
    return NextResponse.redirect(url)
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '')
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}