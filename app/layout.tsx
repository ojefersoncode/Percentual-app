import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '../utils/helpers';
import '@/styles/main.css';
import { PHProvider } from './providers';
import { ThemeProvider } from '../components/landing/theme-provider';
import dynamic from 'next/dynamic';
import { Toaster } from '../components/ui/toaster';
import PostHogPageViewWrapper from '../components/misc/PostHogPageViewWrapper';


const meta = {
  title: 'Codersaas',
  description: 'Crie seus SaaS ou plataforma ultra rapido.',
  cardImage: '/public/codersaas.png',
  robots: 'follow, index',
  favicon: '/leptrum.png',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription', 'Codersaas', 'SaaS', 'boilerplate', 'template', 'templates'],
    authors: [{ name: 'Codersaas', url: 'https://vercel.com/' }],
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
      site: '@Vercel',
      creator: '@Vercel',
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
          <body>
            <PostHogPageViewWrapper />
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            >
              {children}
            </main>
            <Toaster />
          </body>
        </PHProvider>
      </ThemeProvider>
    </html>
  );
}
