'use client';

import {
  Home,
  LogOut,
  ChartNoAxesCombined,
  GlobeLock,
  Megaphone,
  BookOpen,
  LayoutGrid,
  Menu
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from '../ui/use-toast';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileButton } from './ProfileButton';

export function Sidebar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast({
        title: 'Desconectado com sucesso!'
      });
      router.push('/');
      setTimeout(() => window.location.reload(), 500);
    } catch (error: unknown) {
      toast({
        title: 'Erro ao sair',
        description:
          error instanceof Error ? error.message : 'Erro desconhecido.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <header
        className="sticky top-0 z-30 flex justify-between py-1 items-center px-1
                 border-b border-zinc-300 dark:border-zinc-700 bg-white dark:bg-background gap-4 sm:static sm:h-auto sm:bg-transparent
                 sm:px-4"
      >
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="dark:border border-none dark:border-zinc-700 text-background bg-white/80
                 hover:bg-white dark:bg-background dark:text-text/80 hover:dark:bg-background"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Sidebar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side={'left'}
              className="sm:max-w-xs max-sm:w-56 flex flex-col px-2 bg-white dark:bg-background/80"
            >
              <DialogTitle>
                <VisuallyHidden>Menu</VisuallyHidden>
              </DialogTitle>

              <nav className="flex gap-6 flex-col justify-between text-lg font-medium">
                <div
                  className="flex h-10 w-10 rounded-full text-lg 
                     items-center justify-center md:text-base"
                >
                  <img className="size-8" src="/LogoC.png" alt="logo" />

                  <span className="sr-only">Logo</span>
                </div>

                <Link
                  href="Dashboard"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Home
                </Link>

                <Link
                  href="/analytics"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ChartNoAxesCombined className="h-5 w-5" />
                  Analytics
                </Link>

                <Link
                  href="/security"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <GlobeLock className="h-5 w-5 transition-all" />
                  Segurança
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Megaphone className="h-5 w-5 transition-all" />
                  Novidades
                </Link>
                <Link
                  href="componentes"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <BookOpen className="h-5 w-5 transition-all" />
                  Documentação
                </Link>
              </nav>

              <nav className="flex w-full justify-center items-center mt-auto px-2">
                <Button className="w-full sm:py-6 rounded-lg bg-white/5 dark:bg-white/5 dark:hover:bg-white/10 dark:text-text/80 dark:hover:text-text font-bold border border-zinc-300 dark:border-zinc-700 transition-all">
                  Gerenciar planos
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <div>
            <img className="size-6" src="/LogoC.png" alt="cooderfy logo" />
          </div>
        </div>
        <ProfileButton />
      </header>
    </div>
  );
}
