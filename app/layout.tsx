import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'binuniverse',
  description: 'Share code snippets and text easily with binuniverse',
  openGraph: {
    title: 'binuniverse',
    description: 'Share code snippets and text easily with binuniverse',
    images: [
      {
        url: 'https://images.postersuniverse.workers.dev/?file=OEZEOZBQIZMDOUJTMF5EUOLRIJK4J7Y&mode=inline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'binuniverse',
    description: 'Share code snippets and text easily with binuniverse',
    images: [
      {
        url: 'https://images.postersuniverse.workers.dev/?file=OEZEOZBQIZMDOUJTMF5EUOLRIJK4J7Y&mode=inline',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>

      <body className="binuniverse-layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}