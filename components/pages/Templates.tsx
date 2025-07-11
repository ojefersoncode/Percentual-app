'use client';

import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TemplatesWeb({ user }: { user: User }) {
  const router = useRouter();

  const templates = [
    { id: 1, name: 'Landing page', imageUrl: '/cooderfy.png' },
    { id: 2, name: 'Aplicativo web', imageUrl: '/cooderfy.png' },
    { id: 3, name: 'Ecommerc web', imageUrl: '/cooderfy.png' },
    { id: 4, name: 'Dashboard web', imageUrl: '/cooderfy.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-background border-b border-gray-500/40">
          <div className="flex items-center">
            <img className="size-8" src="/LogoC.png" alt="logo" />
          </div>

          <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
        </nav>

        <div className="mx-auto grid w-full max-w-7xl gap-10 py-10 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border border-gray-500/40 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  onClick={() => router.push('/create-project')}
                  src={template.imageUrl}
                  alt={template.name}
                  className="w-full h-64 object-cover rounded-lg transition-all cursor-pointer hover:border dark:hover:border-gray-300 hover:border-gray-900 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
