'use client';
import { Checkbox } from '@/components/ui/checkbox';

interface Step4Props {
  github: boolean;
  onChangeGithub: (checked: boolean) => void;
}

export const Step4 = ({ github, onChangeGithub }: Step4Props) => (
  <div className="text-black dark:text-white">
    <h1 className="text-black dark:text-white">Configurações extras</h1>
    <label className="flex border p-4 rounded-lg items-center text-black dark:text-white mt-2">
      <Checkbox
        checked={github}
        onCheckedChange={(checked: boolean) => onChangeGithub(checked)}
        className="mr-2 text-black dark:text-white"
      />
      Criar repositório no GitHub
    </label>
    <label className="flex border p-4 mt-4 rounded-lg items-center text-black dark:text-white">
      <Checkbox
        checked={github}
        onCheckedChange={(checked: boolean) => onChangeGithub(checked)}
        className="mr-2 text-black dark:text-white"
      />
      Abrir com vscode
    </label>
  </div>
);
