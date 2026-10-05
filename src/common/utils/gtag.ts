export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    if (GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Google Ads 전환 추적 이벤트
export const reportAdsConversion = (
  conversionLabel?: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag && GOOGLE_ADS_ID) {
    const sendTo = conversionLabel
      ? `${GOOGLE_ADS_ID}/${conversionLabel}`
      : GOOGLE_ADS_ID;
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      ...params,
    });
  }
};
