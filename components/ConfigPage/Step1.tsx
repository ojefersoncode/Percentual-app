'use client';

import { Upload } from 'lucide-react';

interface Step1Props {
  favicon: string;
  onChangeFavicon: (favicon: string) => void;
}

export function Step1({ favicon, onChangeFavicon }: Step1Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convertendo o arquivo para base64
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const base64 = reader.result as string;
          onChangeFavicon(base64); // Atualizando o favicon no estado e no localStorage
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label className="block mb-2 text-gray-300 font-medium">Favicon</label>
      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        <input type="file" className="hidden" onChange={handleFileChange} />
        <Upload className="w-8 h-8 text-gray-400 pt-2" />
        <span className="text-gray-400 text-sm py-2">Selecione uma imagem</span>
      </label>

      {/* Exibindo o favicon atual */}
      {favicon && (
        <img
          src={favicon}
          alt="Favicon Preview"
          className="mt-4 w-16 h-16 rounded-full"
        />
      )}
    </>
  );
}
