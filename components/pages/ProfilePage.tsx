'use client';

import Profilecard from '../ProfileComponents/Profilecard';
import { User } from '@supabase/supabase-js';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ProfilePage({ user }: { user: User }) {
  return (
    <div className="flex h-svh flex-col w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex justify-center">

          <ScrollArea className="md:ml-14 w-full border-none">
            <Profilecard />
          </ScrollArea>
      </main>
    </div>
  );
}
