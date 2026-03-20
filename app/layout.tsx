import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Neko',
  description: 'Share code snippets and text easily with Neko',
  openGraph: {
    title: 'Neko',
    description: 'Share code snippets and text easily with Neko',
    images: [
      {
        url: 'https://images.postersuniverse.workers.dev/?file=OEZEOZBQIZMDOUJTMF5EUOLRIJK4J7Y&mode=inline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neko',
    description: 'Share code snippets and text easily with Neko',
    images: [
      {
        url: 'https://images.postersuniverse.workers.dev/?file=OEZEOZBQIZMDOUJTMF5EUOLRIJK4J7Y&mode=inline',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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

      <body className="Neko-layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
