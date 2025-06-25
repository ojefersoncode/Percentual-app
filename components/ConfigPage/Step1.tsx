'use client';

import { Check, Upload } from 'lucide-react';
import { Input } from '../ui/input';

interface Step1Props {
  favicon: string;
  onChangeFavicon: (favicon: string) => void;
}

export function Step1({ favicon, onChangeFavicon }: Step1Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          onChangeFavicon(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full py-10 justify-center px-4 mt-4 bg-white dark:bg-background rounded-lg border border-gray-200 dark:border-border">

      
      <label className="block mb-2 text-black dark:text-gray-300 font-medium">
        Nome do seu projeto
      </label>
      <div className="flex w-full">
        <Input
          type="text"
          placeholder="Nome do seu projeto"
          className="bg-gray-200 dark:bg-subbackground text-black dark:text-white border border-gray-200 dark:border-border"
        ></Input>
      </div>


      <label className="block mb-2 text-black dark:text-gray-300 font-medium">
         Versão do seu projeto
      </label>
      <div className="flex w-full">
        <Input
          type="number"
          placeholder="Versão do seu projeto"
          className="bg-gray-200 dark:bg-subbackground text-black dark:text-white border border-gray-200 dark:border-border"
        ></Input>
      </div>
      
      
      <label className="block mt-4 mb-2 text-black dark:text-gray-300 font-medium">
        Seu nome
      </label>
      <div className="flex w-full">
        <Input
          type="text"
          placeholder="Seu nome ou apelido"
          className="bg-gray-200 dark:bg-subbackground text-black dark:text-white border border-gray-200 dark:border-border"
        ></Input>
      </div>

      <div className="flex flex-col w-full mt-7">
        <label className="block mt-2 mb-1 text-black dark:text-gray-300 font-medium">
          Favicon
        </label>
      </div>

      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg bg-gray-200 dark:bg-subbackground transition px-1">
        <input
          type="file"
          accept="image/png, image/svg+xml, image/webp"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col w-full items-center justify-center bg-white dark:bg-subbackground">
          <Upload className="w-6 h-6 text-black dark:text-gray-400" />
          <span className="text-black dark:text-gray-400 text-xs sm:text-sm text-center mt-2">
            Selecione uma imagem
          </span>
        </div>
      </label>

      {favicon && (
        <img
          src={favicon}
          alt="Favicon Preview"
          className="mt-7 border max-w-[6rem] h-auto rounded-lg mx-auto"
        />
      )}
    </div>
  );
}
