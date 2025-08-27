'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { LogOut, MenuIcon, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

export function ProfileButton() {
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
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-0 md:py-2 md:px-2 rounded-md max-md:border-none md:border-2 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent">
          <div className="flex flex-col justify-center items-center gap-2">
            <MenuIcon className="text-text dark:text-text w-5 h-5 md:size-6" />
            <span className="md:hidden text-sm font-bold text-text/70 dark:text-text/70 hover:text-text dark:hover:text-text">
              Perfil
            </span>
          </div>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background dark:bg-background border-border px-2"
      >
        <SheetHeader>
          <SheetTitle className="text-text px-2 dark:text-text">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <Button
            variant="ghost"
            className="justify-start hover:bg-subbackground dark:hover:bg-subbackground text-text hover:text-text/90"
            onClick={() => router.push('/profile')}
          >
            <User className="w-5 h-5 mr-2" />
            Minha conta
          </Button>
          <Button
            variant="ghost"
            className="justify-start hover:bg-subbackground dark:hover:bg-subbackground text-red-500 hover:text-red-400"
            onClick={handleSignOut}
            disabled={loading}
          >
            <LogOut className="w-5 h-5 mr-2" />
            {loading ? 'Saindo...' : 'Sair'}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
