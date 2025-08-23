'use client';
import { User } from '@supabase/supabase-js';
import { Home } from '../HomeComponents/Home';
import Footer from '../HomeComponents/Footer';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="flex flex-1 h-svh flex-col w-full bg-background dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="w-full flex-1 p-2">
          <Home />
        </div>
        <div className="py-6 max-md:pb-24">
          <Footer />
        </div>
      </main>
    </div>
  );
}
