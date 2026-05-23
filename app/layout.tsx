import type {Metadata} from 'next';
import {Tajawal} from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'وهج الرواد للمقاولات | Wahj Al Ruwad',
  description: 'شركة وهج الرواد لتأجير المعدات الثقيلة، نوفر حلول احترافية في تأجير الكرينات المتحركة، الرافعات الشوكية، السيزر لفت لمشاريع البناء.',
  keywords: [
    'تأجير معدات ثقيلة', 'تأجير معدات', 'معدات بناء', 'حفارات', 'رافعات برجية', 
    'تأجير شاحنات', 'السعودية', 'الرياض', 'مقاولات', 'معدات انزلاقية', 'وهج الرواد', 'بنية تحتية'
  ],
  authors: [{ name: 'وهج الرواد للمقاولات' }],
  robots: 'index, follow',
  openGraph: {
    title: 'وهج الرواد للمقاولات | Wahj Al Ruwad',
    description: 'تلتزم شركة وهج الرواد بتقديم أفضل المعدات ذات الكفاءة العالية.',
    url: 'https://wrco.sa',
    siteName: 'وهج الرواد للمقاولات',
    images: [
      {
        url: '/saudi_hero.png',
        width: 1200,
        height: 630,
        alt: 'وهج الرواد للمقاولات',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وهج الرواد للمقاولات | Wahj Al Ruwad',
    description: 'أسطول متكامل من أحدث المعدات الثقيلة لدعم مشاريع البنية التحتية والإنشاءات في السعودية.',
    images: ['/saudi_hero.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} font-sans bg-slate-50 text-slate-900 border-slate-200 antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
