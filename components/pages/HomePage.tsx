'use client';
import { User } from '@supabase/supabase-js';
import { Download } from '../HomeComponents/Download';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="flex flex-1 h-svh flex-col w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="sm:ml-14 flex-1">
          <Download />
        </div>
      </main>
    </div>
  );
}
