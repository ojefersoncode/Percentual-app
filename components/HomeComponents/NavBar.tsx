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
import { ModeToggle } from '../landing/mode-toggle';
import {
  Menu,
  Home,
  Layers,
  LayoutTemplate,
  BookOpen,
  Settings,
  User,
  CreditCard,
  HelpCircle,
  Share2,
  LogOut,
  MessageCircle,
  FileText,
  Facebook,
  Send,
  Smartphone
} from 'lucide-react';

import Image from 'next/image';
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

      toast({ title: 'Desconectado com sucesso!' });
      router.push('/');
      setTimeout(() => window.location.reload(), 500);
    } catch (error: unknown) {
      toast({
        title: 'Erro ao sair',
        description: error instanceof Error ? error.message : 'Erro desconhecido.',
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
          variant={'default'}
          className="bg-white dark:bg-background text-black dark:text-white  hover:bg-transparent border-none p-1"
        >
          <Menu className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mr-7">
        <DropdownMenuLabel className="flex flex-col"> 
          <div className="flex items-center gap-2 pt-1 pb-4 border-b border-zinc-600 dark:border-border">
            <Image 
              height={32}
              width={32}
              src="/User.jpeg"
              className="rounded-full"
              alt="User"
             />
            <span className="text-sm">Jeferson</span>
          </div>
          <div className="flex w-full justify-between items-center">
          <h1 className="text-xs"> 
            Tema
          </h1> 
          <ModeToggle />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/Home')}>
            <Home className="w-4 h-4 mr-2" /> Início
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/templates')}>
            <LayoutTemplate className="w-4 h-4 mr-2" /> Templates & Projetos
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/componentes')}>
            <Layers className="w-4 h-4 mr-2" /> Componentes
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/componentes')}>
            <FileText className="w-4 h-4 mr-2" /> Documentação 
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/cursos')}>
            <BookOpen className="w-4 h-4 mr-2" /> Cursos
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Settings className="w-4 h-4 mr-2" /> Configurações
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <User className="w-4 h-4 mr-2" /> Perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/planos-e-compras')}>
                  <CreditCard className="w-4 h-4 mr-2" /> Meu plano
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <HelpCircle className="w-4 h-4 mr-2" /> Suporte
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Smartphone className="w-4 h-4 mr-2" /> WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <MessageCircle className="w-4 h-4 mr-2" /> Telegram
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Share2 className="w-4 h-4 mr-2" /> Compartilhar
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Smartphone className="w-4 h-4 mr-2" /> WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Send className="w-4 h-4 mr-2" /> Telegram
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Facebook className="w-4 h-4 mr-2" /> Facebook
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageCircle className="w-4 h-4 mr-2" /> Mensagem
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
          <LogOut className="w-4 h-4 mr-2" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
