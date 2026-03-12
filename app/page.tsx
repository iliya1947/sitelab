import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { locales } from '@/src/i18n';

export default function IndexPage() {
  const acceptLanguage = headers().get('accept-language') ?? '';

  const preferredLocale = acceptLanguage
    .split(',')
    .map((entry) => entry.trim().split(';')[0]?.split('-')[0]?.toLowerCase())
    .find((locale): locale is (typeof locales)[number] => locales.includes(locale as (typeof locales)[number]));

  redirect(`/${preferredLocale ?? 'he'}`);
}
