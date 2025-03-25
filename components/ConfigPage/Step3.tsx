'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface Step3Props {
  font: string;
  icons: string;
  onChangeFont: (font: string) => void;
  onChangeIcons: (icons: string) => void;
}

export const Step3 = ({
  font,
  icons,
  onChangeFont,
  onChangeIcons
}: Step3Props) => (
  <div>
    <label className="block my-2 text-black dark:text-gray-300 font-medium">
      Fonte
    </label>
    <Select value={font} onValueChange={onChangeFont}>
      <SelectTrigger className="mb-7 w-full p-2 text-black dark:text-white rounded">
        <SelectValue placeholder="Escolha uma fonte" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Inter">Inter</SelectItem>
        <SelectItem value="Poppins">Poppins</SelectItem>
        <SelectItem value="Roboto">Roboto</SelectItem>
      </SelectContent>
    </Select>

    <label className="block my-2 text-black dark:text-gray-300 font-medium">
      Ícones
    </label>
    <Select value={icons} onValueChange={onChangeIcons}>
      <SelectTrigger className="mb-3 w-full p-2 text-black dark:text-white rounded">
        <SelectValue placeholder="Escolha um conjunto de ícones" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="lucide">Lucide Icons</SelectItem>
        <SelectItem value="material">Material Icons</SelectItem>
      </SelectContent>
    </Select>
  </div>
);
