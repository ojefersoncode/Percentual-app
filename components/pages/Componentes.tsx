'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Copy, Menu, Bell, MoveRight, MoveLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';

const exampleCode = `export function signinButton() {
  return (
  <Button  variant={'outline'} className='bg-gray-500 text-white p-2 rounded'>
     Entrar
  </Button>;
);}`;

const exampleCode2 = `export function signupButton() {
  return (
  <Button  variant={'ghost'} className='bg-gray-500 text-white p-2 rounded'>
     Sair
  </Button>;
);}`;


const customTheme = {
  ...dracula,
  'pre[class*="language-"]': {
    ...dracula['pre[class*="language-"]'],
    background: '#171717',
    padding: '1em',
    borderRadius: '0.5em',
    fontSize: '0.875rem',
  },
  'code[class*="language-"]': {
    ...dracula['code[class*="language-"]'],
    background: '#171717',
  },
};

export default function Componentes({ user }: { user: User }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-background">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-background border-b border-gray-600/40">
        <div className="flex gap-1 text-xl font-bold items-center">
          <img className="size-8" src="/LogoC.png" alt="logo" />
          <div className="flex">
            <h1 className="text-gray-900 dark:text-gray-100 font-sans text-base">
              Cooderfy
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex flex-1 flex-col w-full items-center p-6 bg-background">
        <div className="flex flex-col gap-2 w-full justify-start pb-7 pt-8 bg-background">
          <div className="flex w-full items-center justify-between pb-2">
          <h1 className="font-bold text-3xl">Botões</h1>
          <div className="flex gap-2">
          <button
          className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-white  hover:bg-transparent border border-gray-500/40">
          <MoveLeft className="size-3" />
          </button>
          <button
          className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-white  hover:bg-transparent border border-gray-500/40">
          <MoveRight className="size-3" />
          </button>
          </div>
          </div>
          
          <span className="text-sm">
            Adicione este componente ao seu projeto, basta seguir a instalação e
            copiar o componente.
          </span>
        </div>

        <div className="pt-2 rounded-lg w-full pb-10">
          <h1 className="font-bold text-xl">Instalação</h1>
          <span className="text-sm">
            Para adicionar este componente ao seu projeto, execute o seguinte
            comando:
          </span>

          {/* Bloco de código com posição relativa */}
          <div className="relative items-center rounded-md bg-subbackground">
            <SyntaxHighlighter
              language="bash"
              style={customTheme}
              className="rounded-md text-sm py-2 px-4"
            >
              {'npm install @cooderfy/ui@latest'}
            </SyntaxHighlighter>

            {/* Botão posicionado no canto superior direito */}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  'npm install @cooderfy/ui@latest'
                );
              }}
              variant={'ghost'}
              className="absolute top-1 right-2 flex items-center bg-white dark:bg-background"
            >
              <Copy className="size-4" />
              
            </Button>
          </div>
        </div>
        <div className="border border-gray-600/40 p-4 bg-subbackground rounded-lg w-full py-4">
          <h1 className="font-bold text-lg pb-4">Botão outiline</h1>

          <div className="flex flex-col w-full items-center gap-4 py-2">
  
            <div className="flex w-full justify-center items-center h-36">
            <Button
              
              className="bg-gray-50 hover:bg-gray-100 text-black p-4 rounded"
            >
              Entrar
            </Button>
            </div>
            
          </div>

          <SyntaxHighlighter
            language="tsx"
            style={customTheme}
            className="rounded-md py-4 px-2 text-xs"
          >
            {exampleCode}
          </SyntaxHighlighter>
          <div className="flex mt-4 w-full justify-end">
            <Button
              onClick={handleCopy}
              variant={'default'}
              className="bg-white dark:bg-subbackground text-black dark:text-white  hover:bg-transparent border border-gray-200 dark:border-gray-500/40"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Código'}
            </Button>
          </div>
        </div>
        <div className="border border-gray-600/40 p-4 bg-subbackground rounded-lg w-full my-4">
          <h1 className="font-bold text-lg pb-4">Botão solido</h1>

          <div className="flex w-full items-center gap-4 p-2">
             <div className="flex w-full justify-center items-center h-36">
             <Button
              variant={'ghost'}
              className="bg-white text-black p-4 rounded"
            >
              Sair
            </Button>
             </div>
            
          </div>

          <SyntaxHighlighter
            language="tsx"
            style={customTheme}
            className="rounded-md py-4 px-2 text-xs"
          >
            {exampleCode2}
          </SyntaxHighlighter>
          <div className="flex mt-4 w-full justify-end">
            <Button
              onClick={handleCopy}
              variant={'default'}
              className="bg-white dark:bg-subbackground text-black dark:text-white  hover:bg-transparent border border-gray-200 dark:border-gray-500/40"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Código'}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
