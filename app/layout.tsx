import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '../utils/helpers';
import '@/styles/main.css';
import { PHProvider } from './providers';
import { ThemeProvider } from '../components/landing/theme-provider';
import { Toaster } from '../components/ui/toaster';
import PostHogPageViewWrapper from '../components/pages/PostHogPageViewWrapper';
import { Navbottom } from '@/components/HomeComponents/Navbottom';
import { BalanceProvider } from '@/components/HomeComponents/BalanceContext';

const meta = {
  title: 'Cooderfy',
  description: 'Seus sites até 10x mais seguros.',
  cardImage: '/cooderfy.png',
  robots: 'follow, index',
  favicon: '/Favicon.png',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Vercel',
      'Supabase',
      'Code',
      'Codes',
      'Segurança web',
      'Next.js',
      'React js',
      'wordpress',
      'cooderfy',
      'Sec',
      'Segurança',
      'Security',
      'Dev',
      'Cooderfy',
      'SaaS',
      'Ai',
      'templates'
    ],
    authors: [{ name: 'cooderfy', url: 'https://cooderfy.com/' }],
    creator: 'OjersonCode',
    publisher: 'OjefersonCode',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@cooderfy',
      creator: 'ojefersoncode',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>
        <PHProvider>
          <BalanceProvider>
            <body>
              <PostHogPageViewWrapper />
              <main
                id="skip"
                className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
              >
                <div className="md:hidden">
                  <Navbottom />
                </div>

                {children}
              </main>
              <Toaster />
            </body>
          </BalanceProvider>
        </PHProvider>
      </ThemeProvider>
    </html>
  );
}
