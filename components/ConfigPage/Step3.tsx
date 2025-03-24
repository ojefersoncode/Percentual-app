'use client';
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
    <label className="block mb-2 text-gray-300 font-medium">Fonte</label>
    <select
      className="mb-3 w-full p-2 bg-gray-800 text-gray-300 rounded"
      value={font}
      onChange={(e) => onChangeFont(e.target.value)}
    >
      <option>Inter</option>
      <option>Poppins</option>
      <option>Roboto</option>
    </select>

    <label className="block mb-2 text-gray-300 font-medium">Ícones</label>
    <select
      className="mb-3 w-full p-2 bg-gray-800 text-gray-300 rounded"
      value={icons}
      onChange={(e) => onChangeIcons(e.target.value)}
    >
      <option value="lucide">Lucide Icons</option>
      <option value="material">Material Icons</option>
    </select>
  </div>
);
