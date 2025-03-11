'use client';

import Link from 'next/link';
import { User } from '@supabase/supabase-js';

export function Navbar({ user }: { user: User }) {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-primary">Meu SaaS</div>
      <div className="flex items-center space-x-6">
        <Link href="/home" className="text-lg text-muted-foreground hover:text-primary">
          Dashboard
        </Link>
        <Link href="/projects" className="text-lg text-muted-foreground hover:text-primary">
          Projetos
        </Link>
        <Link href="/profile" className="text-lg text-muted-foreground hover:text-primary">
          Perfil
        </Link>
        <span className="text-lg text-muted-foreground">{user?.email}</span>
      </div>
    </div>
  );
}
