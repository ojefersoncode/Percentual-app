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
import { LogOut, User } from 'lucide-react';
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
          className="py-0 px-1.5 border-none rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent focus:right-0"
        >
          <img
            className="size-8 rounded-full border-2 border-btn"
            src="/User.jpeg"
            alt="logo"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 touch-pan-x touch-pan-y">
        <DropdownMenuGroup className="flex flex-col gap-1">
          <DropdownMenuItem
            className="text-background/80 hover:text-background dark:text-text/80 hover:dark:text-text transition-all"
            onClick={() => router.push('/profile')}
          >
            <User className="w-5 h-5 mr-2" /> Minha conta
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />
          <DropdownMenuItem>
            <div
              className="flex items-center text-red-600 hover:text-red-500 transition-all"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sair
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
