'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Folder } from 'lucide-react';

interface Step4Props {
  github: boolean;
  onChangeGithub: (checked: boolean) => void;
}

export const Step4 = ({ github, onChangeGithub }: Step4Props) => {
  const [vscode, setVscode] = useState(false);
  const [folderPath, setFolderPath] = useState<string | null>(null);
  const [vercel, setVercel] = useState(false);
  const [supabase, setSupabase] = useState(false);

  const handleOpenFolder = async () => {
    if ('showDirectoryPicker' in window) {
      try {
        const dirHandle = await (window as any).showDirectoryPicker();
        setFolderPath(dirHandle.name);
      } catch (error) {
        console.error('Erro ao selecionar pasta:', error);
      }
    } else {
      document.getElementById('fileInput')?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFolderPath(event.target.files[0].name);
    }
  };

  return (
    <div className="text-black dark:text-white">
      <h1 className="text-xl font-bold mb-4">Configurações extras</h1>

      <div className="py-4">
        <div
          className="flex flex-col w-full gap-2 justify-center items-center rounded-lg border border-gray-200 dark:border-border py-6 cursor-pointer"
          onClick={handleOpenFolder}
        >
          <Folder className="w-10 h-10 text-zinc-700 dark:text-zinc-400" />
          <span className="text-base font-semibold text-zinc-700 dark:text-zinc-400">
            Selecione um local para salvar
          </span>
          {folderPath && (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {folderPath}
            </span>
          )}
        </div>

        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      <div className="space-y-2">
        <label className="flex border p-4 rounded-lg items-center">
          <Checkbox
            checked={github && vercel && supabase}
            onCheckedChange={(checked: boolean) => {
              onChangeGithub(checked);
              setVercel(checked);
              setSupabase(checked);
            }}
            className="mr-2"
          />
          Selecionar tudo
        </label>

        <label className="flex border p-4 rounded-lg items-center">
          <Checkbox
            checked={github}
            onCheckedChange={(checked: boolean) => onChangeGithub(checked)}
            className="mr-2"
          />
          Criar repositório no GitHub
        </label>

        <label className="flex border p-4 rounded-lg items-center">
          <Checkbox
            checked={vercel}
            onCheckedChange={(checked: boolean) => setVercel(checked)}
            className="mr-2"
          />
          Deploy na Vercel
        </label>

        <label className="flex border p-4 rounded-lg items-center">
          <Checkbox
            checked={supabase}
            onCheckedChange={(checked: boolean) => setSupabase(checked)}
            className="mr-2"
          />
          Configurar Supabase
        </label>

        <label className="flex border p-4 rounded-lg items-center mt-4">
          <Checkbox
            checked={vscode}
            onCheckedChange={(checked: boolean) => setVscode(checked)}
            className="mr-2"
          />
          Abrir com VS Code
        </label>
      </div>
    </div>
  );
};
