import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const siteUrl = 'https://ftdynamics.pk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Future Tech Dynamics — Building Future-Ready Digital Solutions',
    template: '%s | Future Tech Dynamics',
  },
  description:
    'Future Tech Dynamics builds scalable software, SaaS platforms, enterprise software, mobile apps, and AI-powered solutions for startups, enterprises, healthcare, and education.',
  keywords: [
    'software development company',
    'SaaS development',
    'enterprise software',
    'hospital management system',
    'school management system',
    'SehatYar',
    'AI integration',
    'web development',
    'mobile app development',
    'UI/UX design',
  ],
  authors: [{ name: 'Future Tech Dynamics' }],
  creator: 'Future Tech Dynamics',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Future Tech Dynamics',
    title: 'Future Tech Dynamics — Building Future-Ready Digital Solutions',
    description:
      'Scalable software, SaaS platforms, enterprise software, mobile apps, and AI-powered solutions for startups, enterprises, healthcare, and education.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Future Tech Dynamics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Tech Dynamics — Building Future-Ready Digital Solutions',
    description:
      'Scalable software, SaaS platforms, enterprise software, mobile apps, and AI-powered solutions.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Future Tech Dynamics',
    url: siteUrl,
    email: 'info@ftdynamics.pk',
    description:
      'Software development company building scalable software, SaaS platforms, enterprise software, mobile apps, and AI-powered solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
  };
  return (
    <html lang="en" className={cn(inter.variable, sora.variable)}>
      <body className="font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
