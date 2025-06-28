'use client';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Step2Props {
  config: any;
  setConfig: React.Dispatch<React.SetStateAction<any>>;
}

export function Step2({ config, setConfig }: Step2Props) {
  // Cores de texto
  const textColors = ['textPrimary', 'textSecondary', 'textNeutral'];
  // Cores de fundo
  const bgColors = ['bgPrimary', 'bgSecondary', 'bgNeutral'];

  return (
    <>
      <div className="w-full p-4 rounded-lg border border-gray-200 dark:border-border">
      <label className="block text-xl text-black dark:text-gray-300 font-medium">
        Paleta de Cores
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
        {/* Coluna 1: Cores de Texto */}
        <div className="space-y-2">
          {textColors.map((key) => (
            <div key={key}>
              <label className="block text-black dark:text-gray-200 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex w-full">
                <Input
                  className="text-sm bg-white dark:bg-subbackground text-black dark:text-text border border-zinc-300 dark:border-border"
                  placeholder="Cole seu hex aqui"
                  type="text"
                  id=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* Coluna 2: Cores de Fundo */}
        <div className="space-y-2 mb-4">
          {bgColors.map((key) => (
            <div key={key}>
              <label className="block text-black dark:text-gray-200 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex w-full">
                <Input
                  className="text-sm bg-white dark:bg-subbackground text-black dark:text-text border border-zinc-300 dark:border-border"
                  placeholder="Cole seu hex aqui"
                  type="text"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
