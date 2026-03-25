import { buildMetadata } from '@/lib/seo';
import { withLang } from '@/lib/routes';
import { getDictionary, isLocale, locales, Locale } from '@/src/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const all = await Promise.all(locales.map((lang) => getDictionary(lang)));
  return locales.flatMap((lang, index) =>
    all[index].services.items.map((service) => ({ lang, service: service.slug }))
  );
}

export async function generateMetadata({ params }: { params: { lang: string; service: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const service = dictionary.services.items.find((item) => item.slug === params.service);
  if (!service) return {};

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${service.title}`, description: service.shortDescription, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: { params: { lang: string; service: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const service = dictionary.services.items.find((item) => item.slug === params.service);

  if (!service) notFound();

  const processSteps = [
    dictionary.process.steps[0],
    dictionary.process.steps[2],
    dictionary.process.steps[3],
    dictionary.process.steps[4]
  ];

  const carouselImages = Array.from({ length: 5 }, (_, index) => {
    const palette = [
      { bg: '#0f172a', accent: '#38bdf8' },
      { bg: '#111827', accent: '#22c55e' },
      { bg: '#1e1b4b', accent: '#a78bfa' },
      { bg: '#172554', accent: '#60a5fa' },
      { bg: '#3f1d2e', accent: '#f472b6' }
    ][index];

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 720'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${palette.bg}' />
          <stop offset='100%' stop-color='${palette.accent}' />
        </linearGradient>
      </defs>
      <rect width='1200' height='720' fill='url(#g)' />
      <rect x='80' y='80' width='1040' height='560' rx='28' fill='rgba(15, 23, 42, 0.5)' stroke='rgba(255,255,255,0.25)' />
      <rect x='120' y='140' width='700' height='44' rx='10' fill='rgba(255,255,255,0.2)' />
      <rect x='120' y='220' width='300' height='320' rx='18' fill='rgba(255,255,255,0.16)' />
      <rect x='450' y='220' width='620' height='120' rx='18' fill='rgba(255,255,255,0.14)' />
      <rect x='450' y='370' width='620' height='170' rx='18' fill='rgba(255,255,255,0.12)' />
      <text x='120' y='620' fill='white' font-family='Arial, sans-serif' font-size='42' opacity='0.9'>${service.title}</text>
    </svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });

  return (
    <article className="space-y-8 md:space-y-10">
      <header className="section-glow card p-6 text-white md:grid md:grid-cols-2 md:gap-8 md:p-12 lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">{dictionary.servicesSection.title}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">{service.shortDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withLang(lang, '/calculator#calculator')} className="primary-btn inline-flex">
              {dictionary.hero.ctaSecondary}
            </Link>
            <Link href={withLang(lang, '/contact')} className="secondary-btn inline-flex">
              {dictionary.hero.ctaPrimary}
            </Link>
          </div>
        </div>

        <div className="group mt-8 overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 md:mt-0">
          <div className="carousel-track flex w-full">
            {[...carouselImages, carouselImages[0]].map((image, index) => (
              <div key={`${image}-${index}`} className="w-full flex-shrink-0">
                <Image
                  src={image}
                  alt={`${dictionary.servicePage.demoPlaceholder} ${index + 1}`}
                  width={1200}
                  height={720}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{dictionary.consultation.title}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {dictionary.consultation.benefits.slice(0, 4).map((benefit) => (
            <li key={benefit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-100">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{dictionary.servicePage.featuresTitle}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-100">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{dictionary.process.title}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-2 text-lg font-medium text-white">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-glow card p-6 md:p-8">
        <p className="text-xl font-semibold text-white">
          {dictionary.servicePage.priceFromLabel}: <span className="price-highlight">{service.priceFrom}</span>
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={withLang(lang, '/contact')} className="primary-btn inline-flex">
            {dictionary.hero.ctaPrimary}
          </Link>
          <Link href={withLang(lang, '/calculator#calculator')} className="secondary-btn inline-flex">
            {dictionary.hero.ctaSecondary}
          </Link>
        </div>
      </section>

      <style jsx>{`
        .carousel-track {
          animation: carouselSlide 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .group:hover .carousel-track {
          animation-play-state: paused;
        }

        @keyframes carouselSlide {
          0%,
          14% {
            transform: translateX(0%);
          }
          18%,
          30% {
            transform: translateX(-100%);
          }
          34%,
          46% {
            transform: translateX(-200%);
          }
          50%,
          62% {
            transform: translateX(-300%);
          }
          66%,
          78% {
            transform: translateX(-400%);
          }
          82%,
          96% {
            transform: translateX(-500%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </article>
  );
}
