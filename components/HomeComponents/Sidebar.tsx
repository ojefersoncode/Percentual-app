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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
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
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r border-zinc-400 bg-white dark:border-zinc-700 dark:bg-background
            sm:flex flex-col max-md:h-dvh"
      >
        <nav className=" flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center
                 text-primary-foreground rounded-full"
            >
              <div className="flex items-center justify-center py-3 border-b border-zinc-300 dark:border-zinc-700 w-full">
                <img className="size-7" src="/LogoC.png" alt="cooderfy logo" />
              </div>
              <span className="sr-only">Dashboard avatar</span>
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <Home
                    onClick={() => router.push('/Dashboard')}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className="sr-only">Home</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/analytics"
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <ChartNoAxesCombined className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/security"
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <GlobeLock className="h-5 w-5" />
                  <span className="sr-only">Segurança</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Segurança</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <Megaphone className="h-5 w-5" />
                  <span className="sr-only">Novidades</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Novidades</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/componentes"
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="sr-only">Documentação</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="flex mt-auto flex-col items-center justify-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={handleSignOut}
                  className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-red-500 transition-colors hover:text-red-600 "
                >
                  <LogOut className="h-5 w-5 transition-all" />
                  <span className="sr-only">Sair</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        
        <header
          className="sticky top-0 z-30 flex justify-between py-1 items-center px-1
                 border-b border-zinc-300 dark:border-zinc-700 bg-white dark:bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent
                 sm:px-6"
        >
              <div className="px-1">
                <img className="size-7" src="/LogoC.png" alt="cooderfy logo" />
              </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="sm:hidden dark:border border-none dark:border-zinc-700 text-background bg-white/80
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

              <nav className="flex  items-center mt-auto gap-4">
                <div
                  className="flex items-center gap-4 px-2.5 text-red-500 hover:text-red-600"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-5 w-5 transition-all" />
                  Saitr
                </div>
              </nav>
            </SheetContent>
          </Sheet>
       
        </header>
      </div>
    </div>
  );
}
