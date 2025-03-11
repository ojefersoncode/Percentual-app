'use client';

import { Button } from '../../components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { User } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import { useToast } from '../../components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { createApiClient } from '../../utils/supabase/api';
import { Navbar } from '../HomeComponents/NavBar';
import Link from 'next/link';

export default function HomePage({ user }: { user: User }) {
  const supabase = createClient();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const api = createApiClient(supabase);
    await api.signOut();
    toast({
      title: 'Desconectado com sucesso!'
    });
    router.push('/');
    router.refresh();
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar user={user} />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Home</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="#" className="font-semibold text-red-600">
              Projetos web
            </Link>
            <Link href="mailto:">Projeto mobile</Link>
            <Link href="mailto:">LadingPages</Link>
            <Link href="mailto:">Componentes</Link>
            <Link href="mailto:">Suporte</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sair da conta</CardTitle>
                <CardDescription>Faça logout da sua conta</CardDescription>
              </CardHeader>
              <CardFooter className="border-t px-6 py-4">
                <Button onClick={handleSignOut} disabled={loading}>
                  Sair
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
