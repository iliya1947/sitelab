import { siteConfig } from '@/src/config/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  areaServed: 'Israel',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'High-performance websites',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Custom web applications',
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
