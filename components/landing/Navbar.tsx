'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { Button, buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { User } from '@supabase/supabase-js';
import { createApiClient } from '@/utils/supabase/api';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/#features',
    label: 'Inicio'
  },
  {
    href: '/#testimonials',
    label: 'Sobre'
  },
  {
    href: '/#pricing',
    label: 'Preços'
  },
  {
    href: '/#faq',
    label: 'FAQ'
  }
];

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
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container py-2 px-6 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
          <div className="flex gap-2 text-xl font-bold items-center">
          <img className="size-7" src="/Leptrum.png" alt="logo" />
            <div className="flex">
              <h1 className="text-slate-50">Percentual</h1>
            </div>
          </div>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2" asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={handleAuth}
                    className={`w-[110px] border`}
                  >
                    {user ? 'Account' : 'Sign In'}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 bg-none hover:text-red-600">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] ${buttonVariants({
                  variant: 'ghost'
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button
              onClick={handleAuth}
              className={`border`}
              variant="secondary"
            >
              {user ? 'Account' : 'Entrar'}
            </Button>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
