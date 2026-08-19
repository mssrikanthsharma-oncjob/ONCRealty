import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'O Nanna Chetana Charitable Trust',
    template: '%s · ONC Trust',
  },
  description:
    'O Nanna Chetana Charitable Trust — gamified applied education for children in rural India, 6Q personality development, talent support, environment care and community welfare.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Baloo+Tamma+2:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
