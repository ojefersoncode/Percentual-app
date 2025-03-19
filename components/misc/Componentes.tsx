'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Copy, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ModeToggle } from '../landing/mode-toggle';
import { Navbar } from '../HomeComponents/NavBar';

const exampleCode = `export function ButtonOutline() {
  return <button  variant={'outline'} className='bg-gray-500 text-white p-2 rounded'>Click me</button>;
}`;

export default function Componentes({ user }: { user: User }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-2 px-4 md:px-8 bg-white dark:bg-black">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img className="h-7 w-7" src="/Leptrum.png" alt="logo" />
          <h1 className="text-gray-900 dark:text-gray-100">Cooderfy</h1>
        </div>

        <div className="flex gap-2">
          <ModeToggle />
          <Navbar />
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex flex-1 flex-col w-full items-center p-6">
        <div className='flex flex-col gap-2 w-full justify-start mb-4'>
          <h1 className='font-bold text-xl'>Botão outiline</h1>
          <span className='text-sm'>Adicione este componente ao seu projeto, basta seguir a instalação</span>
        </div>

        <div className="border p-4 bg-gray-700 rounded-lg w-full">
          <SyntaxHighlighter
            language="tsx"
            style={dracula}
            className="rounded-md py-10 px-4"
          >
            {exampleCode}
          </SyntaxHighlighter>
          <div className="flex w-full justify-end">
            <Button
              onClick={handleCopy}
              variant={'outline'}
              className="mt-4 flex items-center"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Código'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
