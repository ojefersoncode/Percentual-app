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
      <label className="block mt-4 mb-2 text-gray-300 font-medium">
        Paleta de Cores
      </label>

      <div className="grid grid-cols-2 items-center justify-center gap-6">
        {/* Coluna 1: Cores de Texto */}
        <div className="space-y-4">
          {textColors.map((key) => (
            <div key={key}>
              <label className="block text-gray-300 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex items-center gap-4">
                <Input
                  className="text-sm w-64"
                  placeholder="Cole seu hex aqui"
                  type="text"
                  id=""
                />
                <Button>
                  <Check />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna 2: Cores de Fundo */}
        <div className="space-y-4">
          {bgColors.map((key) => (
            <div key={key}>
              <label className="block text-gray-300 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex items-center gap-4">
                <Input
                  className="text-sm w-64"
                  placeholder="Cole seu hex aqui"
                  type="text"
                  id=""
                />
                <Button>
                  <Check />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
