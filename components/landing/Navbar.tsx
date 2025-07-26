'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { ModeToggle } from './mode-toggle';
import { User } from '@supabase/supabase-js';
import { createApiClient } from '@/utils/supabase/api';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useToast } from '../../components/ui/use-toast';

export const Navbar = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const { toast } = useToast();
  const api = createApiClient(createClient());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleAuth = async () => {
    if (user) {
      return router.push('/account');
    }
    return router.push('/auth');
  };
  return (
    <header className="w-full border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white/50  dark:bg-subbackground/50">
      <div>
        <div className="flex w-full justify-between p-3">
          <div className="flex">
            <div className="flex gap-2 text-lg items-center">
              <img className="size-7" src="/LogoC.png" alt="logo" />
              <h1 className="text-gray-900 font-bold dark:text-text">
                Cooderfy
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link className="p-0" href="/Dashboard" passHref>
              <Button
                className="px-5 py-0 text-text hover:text-text text-sm bg-btn hover:bg-btn dark:hover:bg-btn"
                variant="ghost"
              >
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
