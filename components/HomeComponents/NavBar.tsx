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
import { Bell, User, HelpCircle, LogOut } from 'lucide-react';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
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
            className="size-7 rounded-full border-2 border-btn"
            src="/Mash.jpeg"
            alt="logo"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 ml-1 touch-pan-x touch-pan-y">
        <DropdownMenuGroup className="flex flex-col gap-2 pt-2">
          <DropdownMenuItem onClick={() => router.push('/profile')}>
            <User className="w-5 h-5 mr-2" /> Minha conta
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
          <LogOut className="w-5 h-5 mr-2" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
