import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const supported = ['he', 'en', 'ru'] as const;
const fallback = 'he';

function parseAcceptLanguage(header: string) {
  return header
    .split(',')
    .map((item) => {
      const [lang, q] = item.trim().split(';q=');

      return {
        lang: lang.split('-')[0],
        q: q ? parseFloat(q) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);
}

export default function RootPage() {
  const accept = headers().get('accept-language') || '';

  const parsed = parseAcceptLanguage(accept);

  const preferred = parsed.find((item) => supported.includes(item.lang as (typeof supported)[number]));

  const locale = preferred?.lang || fallback;

  redirect(`/${locale}`);
}
