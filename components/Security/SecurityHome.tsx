'use client';
import { useState } from 'react';
import { Copy, MoveLeft, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '../../components/ui/card';
import { ProfileButton } from '../HomeComponents/ProfileButton';

const Installation = `npm install cooderfy@latest`;

const exampleCode = `npx cooderfy@latest add ddos defender`;

const exampleCode2 = `npx cooderfy@latest add api defender`;

const exampleCode3 = `npx cooderfy@latest add supabase defender`;

export default function SecurityHome() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col p-4  mx-auto w-full">
      <div className="flex w-full justify-between items-center pb-4">
        <h1 className="text-xl font-medium text-black dark:text-text">
          Projetos
        </h1>
        <ProfileButton />
      </div>

      <Card className="border border-zinc-400 dark:border-zinc-700 dark:bg-subbackground p-4 w-full flex-1 space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between pb-2 gap-2">
            <h1 className="font-bold text-xl text-btn">Configurar</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-text hover:bg-transparent border">
                <MoveLeft className="size-4" />
              </button>
              <button className="p-2 rounded-md bg-white dark:bg-background text-black dark:text-text hover:bg-transparent border">
                <MoveRight className="size-4" />
              </button>
            </div>
          </div>
          <span className="text-sm text-black/80 dark:text-text/80">
            Adicione esse componente ao seu projeto para ativar as defesas
            abaixo
          </span>
        </div>

        {/* Instalação*/}
        <div className="">
          <h1 className="font-bold text-lg text-btn">Instalação</h1>

          <div className="flex items-center mt-2 border rounded-lg dark:bg-subbackground">
            <div className=" text-sm flex-1 p-4">{Installation}</div>
            <Button
              onClick={handleCopy}
              className="dark:bg-transparent text-xs text-black dark:text-text hover:bg-transparent border-none"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copiado!' : ''}
            </Button>
          </div>
        </div>

        {/* Seção 1 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <h1 className="font-sans text-base text-btn mb-2">DDoS defender</h1>
          <div className="rounded-md text-xs">{exampleCode}</div>
          <div className="flex mt-4">
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

        {/* Seção 2 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <h1 className="font-sans text-base text-btn mb-2">Api defender</h1>
          <div className="rounded-md text-xs">{exampleCode2}</div>
          <div className="flex mt-4">
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



           {/* Seção 3 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <h1 className="font-sans text-base text-btn mb-2">Api defender</h1>
          <div className="rounded-md text-xs">{exampleCode3}</div>
          <div className="flex mt-4">
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
      </Card>
    </div>
  );
}
