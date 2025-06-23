'use client';
import { User } from '@supabase/supabase-js';
import { Bell } from 'lucide-react';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { ModeToggle } from '../landing/mode-toggle';
import { Download } from '../HomeComponents/Download';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex min-h-screen w-full bg-gray-200 dark:bg-black dark:bg-muted/40">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-black">
          <div className="flex gap-1 text-xl font-bold items-center">
            <img className="size-8" src="/logo.webp" alt="logo" />
            <div className="flex">
              <h1 className="text-gray-900 dark:text-gray-100 text-base">
                Cooderfy
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Bell className="size-4" />
            <Navbar />
          </div>
        </nav>

        <div>
          <Download />
        </div>

        <Footer />
      </main>
    </div>
  );
}
