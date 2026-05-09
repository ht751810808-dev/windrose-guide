import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Windrose Guide – Complete Fan Guide for Windrose Game 2026',
  description:
    'Everything about Windrose: builds, weapons, ships, crew, mods, map, wiki, and more. Your #1 Windrose game fan resource. Updated 2026.',
  keywords: [
    'windrose',
    'windrose game',
    'windrose guide',
    'windrose wiki',
    'windrose builds',
    'windrose weapons',
    'windrose ships',
    'windrose crew',
    'windrose mods',
    'windrose map',
  ],
  metadataBase: new URL('https://www.windroseguide.com'),
  openGraph: {
    title: 'Windrose Guide – Complete Fan Guide for Windrose Game',
    description:
      'The #1 Windrose fan resource. Builds, weapons, ships, crew management, mods, interactive map, wiki, and more.',
    url: 'https://www.windroseguide.com',
    siteName: 'Windrose Guide',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Windrose Game Fan Guide',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Guide – Complete Game Guide & Wiki',
    description: 'Builds, weapons, ships, mods, map, and more. Updated 2026.',
  },
  robots: { index: true, follow: true },
  other: {
    'google-adsense-account': 'ca-pub-4159784234426326',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8W5BXVHR03"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8W5BXVHR03');
        `}</Script>
        {/* Google AdSense Auto Ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4159784234426326"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
