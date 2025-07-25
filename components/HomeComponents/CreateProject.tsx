'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '../ui/use-toast';
import { createClient } from '../../utils/supabase/client';
const supabase = createClient();

type CreateProjectProps = {
  onProjectCreated: (project: any) => void;
};

export default function CreateProject({
  onProjectCreated
}: CreateProjectProps) {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    const filtered = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    setName(filtered);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) {
      toast({
        title: 'Nome inválido',
        description: 'Por favor, informe um nome para o projeto.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      setLoading(false);
      toast({
        title: 'Erro de autenticação',
        description: 'Usuário não autenticado.',
        variant: 'destructive'
      });
      return;
    }

    const userId = userData.user.id;

    // Verifica projetos existentes
    const { data: existingProjects, error: countError } = await supabase
      .from('projects')
      .select('id', { count: 'exact' })
      .eq('owner', userId);

    if (countError) {
      setLoading(false);
      toast({
        title: 'Erro ao verificar projetos',
        description: countError.message,
        variant: 'destructive'
      });
      return;
    }

    if (existingProjects.length >= 3) {
      setLoading(false);
      toast({
        title: 'Limite atingido',
        description: 'Você já possui 3 projetos. Delete um para criar outro.',
        variant: 'destructive'
      });
      return;
    }

    // Criação do novo projeto
    const { data, error } = await supabase
      .from('projects')
      .insert([{ name, owner: userId }])
      .select()
      .single();

    setLoading(false);

    if (error) {
      toast({
        title: 'Erro ao criar projeto',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      setName('');
      onProjectCreated(data);
      toast({
        title: 'Projeto criado',
        description: `Projeto "${data.name}" criado com sucesso!`
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" rounded-lg bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text">
          <div className="flex w-full items-center gap-2">
            <span className="text-xs font-sans max-md:hidden">
              Novo projeto
            </span>
            <Plus className="w-4 h-4" />
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-background">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex w-full justify-start mb-4">
              Criar um novo projeto
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-3 py-4 max-md:py-2">
            <Label htmlFor="name-1">Nome de projeto</Label>
            <Input
              id="name-1"
              name="name"
              value={name}
              onChange={handleChange}
              className="bg-white dark:bg-subbackground dark:text-text border border-zinc-400 dark:border-zinc-700"
              placeholder="Somente letras e números"
            />
          </div>

          <DialogFooter className="flex flex-col w-full gap-4 mt-4">
            <DialogClose asChild>
              <Button
                disabled={loading}
                className="bg-white dark:bg-background dark:hover:bg-background dark:text-text border border-zinc-400 dark:border-zinc-700"
              >
                Cancelar
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                disabled={loading}
                type="submit"
                className="px-3 py-2 rounded-lg bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text"
              >
                {loading ? 'Criando...' : 'Criar projeto'}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
