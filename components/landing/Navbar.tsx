'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';

import { Button } from '../../components/ui/button';
import { Menu } from 'lucide-react';
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
    <header className="sticky border border-zinc-300 dark:border-zinc-700 rounded-lg w-full bg-white/50  dark:bg-subbackground/50">
      <NavigationMenu className="mx-auto px-2">
        <NavigationMenuList className="container py-2 px-3 w-screen flex justify-between ">
          <NavigationMenuItem className="flex">
            <div className="flex gap-2 text-lg items-center px-4 max-md:px-2">
              <img className="size-7" src="/LogoC.png" alt="logo" />

                <h1 className="text-gray-900 font-bold dark:text-text">Cooderfy</h1>
            </div>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex items-center gap-4 px-4 max-md:px-2 md:hidden">
            <ModeToggle />

                  <Link className="p-0" href="/Home" passHref>
                    <Button className="px-5 py-0 text-text hover:text-text text-sm bg-btn hover:bg-btn dark:hover:bg-btn" variant="ghost">
                      Entrar
                    </Button>
                  </Link>
          </span>

          <div className="hidden md:flex gap-4 px-4 max-md:px-2 items-center">
            <ModeToggle />
            <Link href="/Home" passHref>
              <Button
                className="px-4 py-0.5 text-sm bg-btn dark:bg-btn"
                variant="outline"
              >
                Entrar
              </Button>
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
