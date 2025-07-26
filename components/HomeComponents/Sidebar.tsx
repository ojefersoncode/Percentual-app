'use client';
import {
  House,
  ChartNoAxesCombined,
  Megaphone,
  BookOpen,
  LogOut,
  GlobeLock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

export default function Sidebar() {
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
    <div className="flex flex-col max-sm:h-svh h-dvh items-center justify-between w-12 border-r border-zinc-200 dark:border-zinc-700 dark:bg-subbackground">
      <div className="w-full flex flex-col items-center gap-5 text-background/70 dark:text-text">
        <div className="flex items-center justify-center py-3 border-b border-zinc-300 dark:border-zinc-700 w-full">
          <img className="size-7" src="/LogoC.png" alt="logo" />
        </div>

        <BookOpen
          onClick={() => router.push('/componentes')}
          className="w-5 h-5 cursor-pointer"
        />

        <House
          onClick={() => router.push('/Home')}
          className="w-5 h-5 cursor-pointer"
        />

        <ChartNoAxesCombined
          onClick={() => router.push('/analytics')}
          className="w-5 h-5 cursor-pointer"
        />

        <GlobeLock onClick={() => router.push('/security')} className="w-5 h-5 cursor-pointer" />

        <Megaphone
          onClick={() => router.push('/componentes')}
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center w-full dark:text-text">
        <div className="mt-4"></div>

        <Button
          onClick={handleSignOut}
          disabled={loading}
          className="px-1 pb-5 bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent text-background dark:text-text"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
