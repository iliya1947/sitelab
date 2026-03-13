import StructuredData from '@/components/SEO/StructuredData';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#05070f] text-slate-100 antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
