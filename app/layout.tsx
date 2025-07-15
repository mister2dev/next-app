import type { Metadata } from 'next';
import { Marcellus } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
});

export const metadata: Metadata = {
  title: 'Restaurant Brasserie Française',
  description: 'Cuisine raffinée et ambiance chaleureuse',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${marcellus.variable} antialiased scroll-smooth [scroll-padding-top:50px]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
