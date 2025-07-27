'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from '@supabase/supabase-js';
import SecurityHome from '../Security/SecurityHome';

export default function SecurityPage({ user }: { user: User }) {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="flex">
          
          <ScrollArea className="md:ml-14 w-full h-svh border-none flex-1">
            <SecurityHome />
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
