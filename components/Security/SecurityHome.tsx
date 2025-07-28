'use client';
import { useState } from 'react';
import { Copy, MoveLeft, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '../../components/ui/card';

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
      <Card className=" w-full flex-1 space-y-6 bg-white dark:bg-background border-none">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center justify-between  gap-2">
            <h1 className="font-bold text-xl text-btn">Instalação</h1>
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

        <div className="flex items-center border rounded-lg dark:bg-background">
          <div className=" text-sm flex-1 p-4">{Installation}</div>
          <Button
            onClick={handleCopy}
            className="dark:bg-background text-xs text-black dark:text-text hover:bg-white hover:dark:bg-background border-none"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copiado!' : ''}
          </Button>
        </div>

        {/* Seção 1 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <h1 className="font-sans text-base text-btn mb-2">DDoS defender</h1>
          <div className="rounded-md text-xs">{exampleCode}</div>
          <div className="flex mt-4">
            <Button
              onClick={handleCopy}
              variant={'default'}
              className="bg-gray-200 dark:bg-background hover:dark:bg-background text-black dark:text-text hover:bg-transparent border"
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
              className="bg-gray-200 dark:bg-background hover:dark:bg-background text-black dark:text-text hover:bg-transparent border"
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
              className="bg-gray-200 dark:bg-background hover:dark:bg-background text-black dark:text-text hover:bg-transparent border"
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
