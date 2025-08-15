'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CircleUser, LogOut, MenuIcon, User } from 'lucide-react';
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="py-1 px-2 border-none rounded-lg bg-transparent dark:bg-subbackground hover:bg-transparent dark:hover:bg-subbackground/80 focus:right-0"
        >
          <MenuIcon className="text-text size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 touch-pan-x touch-pan-y">
        <DropdownMenuGroup className="flex flex-col gap-1">
          <DropdownMenuItem
            className="text-red-50 hover:text-red-100 hover:dark:text-red-100 transition-all"
            onClick={() => router.push('/profile')}
          >
            <User className="w-5 h-5 mr-2" /> Minha conta
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-zinc-300 dark:bg-background" />
          <DropdownMenuItem>
            <div
              className="flex items-center text-red-50 hover:text-red-100 transition-all"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sair
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
