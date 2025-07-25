'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from '@supabase/supabase-js';
import Sidebar from '../HomeComponents/Sidebar';
import { AnalyticsPage } from '../Dashboard/Analytics/AnalyticsPage';

export default function OverView({ user }: { user: User }) {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="flex">
          <Sidebar />
          <ScrollArea className="w-full border-none h-svh md:flex-1">
            <AnalyticsPage />
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
