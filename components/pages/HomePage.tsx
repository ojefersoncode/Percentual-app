'use client';
import { User } from '@supabase/supabase-js';
import { Bell } from 'lucide-react';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { ModeToggle } from '../landing/mode-toggle';
import { Download } from '../HomeComponents/Download';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="flex min-h-screen w-full white dark:bg-background drop-shadow-md touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-4 bg-white dark:bg-background border-b border-zinc-300 dark:border-border">
          <div className="flex items-center">
            <img 
              className="size-8 rounded-full" 
              src="/LogoC.png" 
              alt="logo" />
          </div>

          <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
        </nav>

        <div className="flex-1">
          <Download />
        </div>

        <Footer />
      </main>
    </div>
  );
}
