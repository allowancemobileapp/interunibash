import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { Toaster } from '@/components/ui/toaster';
import { EventSchema } from '@/components/event-schema';
import { MobileCTA } from '@/components/site/mobile-cta';

const fontBody = Inter({ subsets: ['latin'], variable: '--font-body' });
const fontHeadline = Montserrat({ subsets: ['latin'], variable: '--font-headline' });

export const metadata: Metadata = {
  title: 'Game On, Party On – Inter-Uni Edition',
  description: 'The ultimate university showdown. 22-23 December 2025, Lagos, Nigeria.',
  openGraph: {
    title: 'Game On, Party On – Inter-Uni Edition',
    description: 'The ultimate university showdown. 22-23 December 2025, Lagos, Nigeria.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game On, Party On – Inter-Uni Edition',
    description: 'The ultimate university showdown. 22-23 December 2025, Lagos, Nigeria.',
    images: ['/og-image.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <EventSchema />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <MobileCTA />
        <Toaster />
      </body>
    </html>
  );
}
