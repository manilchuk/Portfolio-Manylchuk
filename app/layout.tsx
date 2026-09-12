import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-manylchuk.vercel.app/'),
  title: 'Manylchuk Valentyn | Full Stack Developer',
  description:
    'Portfolio of Valentyn Manylchuk, a Full Stack Developer building modern, scalable web applications with JavaScript, TypeScript, React, Next.js, and Node.js.',
  keywords: [
    'Valentyn Manylchuk',
    'Full Stack Developer',
    'Web Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
  ],
  authors: [{ name: 'Manylchuk Valentyn' }],
  creator: 'Manylchuk Valentyn',
  openGraph: {
    title: 'Manylchuk Valentyn | Full Stack Developer',
    description:
      'Portfolio of Valentyn Manylchuk, a Full Stack Developer building modern, scalable web applications with JavaScript, TypeScript, React, Next.js, and Node.js.',
    url: 'https://portfolio-manylchuk.vercel.app/',
    siteName: 'Manylchuk Valentyn - Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Manylchuk Valentyn - Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manylchuk Valentyn | Full Stack Developer',
    description:
      'Portfolio of Valentyn Manylchuk, a Full Stack Developer building modern, scalable web applications with JavaScript, TypeScript, React, Next.js, and Node.js.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
