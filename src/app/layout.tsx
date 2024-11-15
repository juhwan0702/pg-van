import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans'
});

export const metadata: Metadata = {
  title: '이지크레더블 | PG&VAN 솔루션',
  description:
    '이지크레더블 PG&VAN 솔루션: 신용카드 결제대행 서비스 및 결제 게이트웨이(PG), VAN 서비스를 제공하여 가맹점과 카드사 간의 거래승인, 전표매입 등 효율적인 결제 업무를 지원합니다.',
  generator: 'Next.js',
  applicationName: '이지크레더블 PG&VAN 솔루션',
  referrer: 'origin-when-cross-origin',
  keywords: [
    '이지크레더블',
    'PG',
    'VAN',
    '신용카드 결제대행',
    '결제솔루션',
    'VAN 대리점'
  ],
  authors: [
    {
      name: 'ezcredible',
      url: 'https://pg-van.ezcredible.com'
    }
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://pg-van.ezcredible.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: '이지크레더블 | PG&VAN 솔루션',
    description:
      '이지크레더블 PG&VAN 솔루션: 신용카드 결제대행 서비스 및 결제 게이트웨이(PG), VAN 서비스를 제공하여 가맹점과 카드사 간의 거래승인, 전표매입 등 효율적인 결제 업무를 지원합니다.',
    url: '/',
    siteName: '이지크레더블 PG&VAN 솔루션',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        alt: '이지크레더블 PG&VAN 썸네일'
      }
    ],
    locale: 'ko_KR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '이지크레더블 | PG&VAN 솔루션',
    description:
      '이지크레더블 PG&VAN 솔루션: 신용카드 결제대행 서비스 및 결제 게이트웨이(PG), VAN 서비스를 제공하여 가맹점과 카드사 간의 거래승인, 전표매입 등 효율적인 결제 업무를 지원합니다.',
    images: ['/images/opengraph-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
