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
  <Button  
   variant={'outline'} 
   className='bg-gray-900 text-white'>
    Entrar
 </Button>;
);}`;

const exampleCode2 = `export function signupButton() {
 return (
  <Button  
   variant={'ghost'} 
   className='bg-red-600 text-white'>
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
    <div className="flex flex-col bg-white  dark:bg-background touch-pan-x touch-pan-y">
     
      <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-background border-b">
        <div className="flex items-center">
          <img className="size-8" src="/LogoC.png" alt="logo" />
        </div>

        <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
      </nav>

     
      <main className="flex flex-1 flex-col w-full items-center p-6">
        <div className="flex flex-col gap-2 w-full justify-start pt-4 pb-3">
          <div className="flex w-full items-center justify-between pb-2">
            <h1 className="font-bold text-xl text-black dark:text-text">Botões</h1>
             <div className="flex gap-4">
               <button
                 className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-text hover:bg-transparent border">
                <MoveLeft className="size-3" />
               </button>
              <button
                className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-text  hover:bg-transparent border">
                <MoveRight className="size-3" />
               </button>
             </div>
          </div>
          
          <span className="text-sm text-black dark:text-text pb-4">
            Para adicionar esse componente ao seu projeto, basta copiar o código abaixo.
          </span>
        </div>

        <div className="border p-4 bg-gray-100 dark:bg-subbackground rounded-lg w-full py-4">
          <h1 className="font-sans text-base text-black dark:text-text p-2">
           Botão outiline
          </h1>

          <div className="flex flex-col w-full items-center gap-4 py-2">
  
            <div className="flex w-full justify-center items-center h-32">
            <Button
              
              className="bg-white hover:bg-gray-100 dark:bg-background dark:hover:bg-background/80 text-black dark:text-text border p-4 rounded"
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
              className="bg-gray-200 dark:bg-subbackground text-black dark:text-text hover:bg-transparent border"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar'}
            </Button>
          </div>
        </div>
        <div className="border p-4 bg-gray-100 dark:bg-subbackground rounded-lg w-full my-4">
          <h1 className="font-sans text-base text-black dark:text-text p-2">
           Botão solido
          </h1>

          <div className="flex w-full items-center gap-4 p-2">
             <div className="flex w-full justify-center items-center h-32">
             <Button
              variant={'ghost'}
              className="bg-red-600 text-text p-4 rounded"
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
              className="bg-gray-100 dark:bg-subbackground text-black dark:text-text hover:bg-transparent border"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar'}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
