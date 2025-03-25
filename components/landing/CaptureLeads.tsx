'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useToast } from '@/components/ui/use-toast';

// Define o tipo correto
type Lead = {
  id?: string; // Se você tiver um campo de ID (gerado automaticamente)
  email: string;
};

export const CaptureLeads = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedEmail = localStorage.getItem('lead_email');
    if (savedEmail) {
      toast({
        title: 'Aviso',
        description: 'Você já se cadastrou anteriormente.',
        variant: 'destructive'
      });
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: 'Erro',
        description: 'Digite um email válido.',
        variant: 'destructive'
      });
      return;
    }

    // Verifica se o email já foi cadastrado
    const savedEmail = localStorage.getItem('lead_email');
    if (savedEmail === email) {
      toast({
        title: 'Aviso',
        description: 'Este email já foi cadastrado!',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const lead: Lead = { email }; // Criando o objeto corretamente

    const { error } = await supabase.from('leads').insert([lead]);

    if (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao salvar. Tente novamente.',
        variant: 'destructive'
      });
      console.error('Supabase error:', error);
    } else {
      toast({
        title: 'Sucesso',
        description: 'Email cadastrado com sucesso!'
      });
      localStorage.setItem('lead_email', email);
      setEmail('');
    }

    setLoading(false);
  };

  return (
    <form
      className="flex w-full items-center max-md:justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Digite-seu-email@email.com"
        className="bg-muted/50 dark:bg-muted/80 w-72"
        aria-label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button className="px-4 py-2" type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Inscrever'}
      </Button>
    </form>
  );
};
