const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SiteLab',
  url: 'https://sitelab.co.il',
  logo: 'https://sitelab.co.il/logo.png',
  description: 'High-performance website development studio',
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
