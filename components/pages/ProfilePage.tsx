'use client';

import Profilecard from '../ProfileComponents/Profilecard';
import Sidebar from '../HomeComponents/Sidebar';
import { useState } from 'react';
import { Navbar } from '../HomeComponents/NavBar';
import { User } from '@supabase/supabase-js';
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ProfilePage({ user }: { user: User }) {

  return (
    <div className="flex flex-col w-full bg-white dark:bg-background touch-pan-x touch-pan-y">

      {/* Main */}
      <main className="flex justify-center">
          
      {/* Sidebarbar */}
      <div className="flex w-full flex-1">
          
          <Sidebar />

        <ScrollArea className="w-full border-none">
        <Profilecard />                 

    </ScrollArea>
              </div>
      </main>
    </div>
  );
}
