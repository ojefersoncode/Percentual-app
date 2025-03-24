'use client';
import { Upload } from 'lucide-react';

interface Step1Props {
  config: any;
  setConfig: React.Dispatch<React.SetStateAction<any>>;
}

export function Step1({ config, setConfig }: Step1Props) {
  return (
    <>
      <label className="block mb-2 text-gray-300 font-medium">Favicon</label>
      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            setConfig({ ...config, favicon: e.target.files?.[0] || '' })
          }
        />
        <Upload className="w-8 h-8 text-gray-400 pt-2" />
        <span className="text-gray-400 text-sm py-2">Selecione uma imagem</span>
      </label>
    </>
  );
}
