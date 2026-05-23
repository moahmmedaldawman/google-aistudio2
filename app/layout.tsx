import type {Metadata} from 'next';
import {Tajawal} from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'رواسي للتأجير | أفضل المعدات الثقيلة في السعودية',
  description: 'الموقع الرائد لتأجير وصيانة المعدات الثقيلة. أسطول حديث وتكنولوجيا عصرية لدعم مشاريعك.',
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
