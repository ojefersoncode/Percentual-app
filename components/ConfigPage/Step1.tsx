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
    <div className="flex flex-col w-full px-4">
      <div>
        <label className="block mb-2 text-gray-300 font-medium">Favicon</label>
      </div>

      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition px-7">
        <input type="file" className="hidden" onChange={handleFileChange} />
        <div className="flex flex-col w-1/2 items-center justify-center">
          <Upload className="w-6 h-6 text-gray-400" />
          <span className="text-gray-400 text-xs sm:text-sm text-center mt-2">
            Selecione uma imagem
          </span>
        </div>
      </label>

      {favicon && (
        <img
          src={favicon}
          alt="Favicon Preview"
          className="mt-7 max-w-[4rem] h-auto rounded-full mx-auto"
        />
      )}
    </div>
  );
}
