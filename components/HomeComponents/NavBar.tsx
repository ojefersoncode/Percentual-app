'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
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
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: 'Erro ao sair',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Erro desconhecido',
          description: 'Ocorreu um erro ao tentar sair.',
          variant: 'destructive'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='border-none focus:none bg-black hover:bg-black py-1 px-2'>
          <Menu className='text-white' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mr-7">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/Home')}>Inicio</DropdownMenuItem>
          <DropdownMenuItem>Templates & Projetos</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/components')}>Componentes</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/video-aula')}>Aréa de aulas</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Configurações</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>Meu plano</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem>Discord</DropdownMenuItem>
        <DropdownMenuItem>Suporte</DropdownMenuItem>
        <DropdownMenuItem disabled>WhatsApp</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Compartilhar</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                <DropdownMenuItem>Telegram</DropdownMenuItem>
                <DropdownMenuItem>Facebook</DropdownMenuItem>
                <DropdownMenuItem>Mensagem</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        {/* Ação de logout */}
        <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}