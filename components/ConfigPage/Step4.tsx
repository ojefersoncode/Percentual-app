'use client';
interface Step4Props {
  github: boolean;
  onChangeGithub: (checked: boolean) => void;
}

export const Step4 = ({ github, onChangeGithub }: Step4Props) => (
  <div>
    <label className="flex items-center text-gray-300 mt-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={github}
        onChange={(e) => onChangeGithub(e.target.checked)}
      />
      Criar repositório no GitHub
    </label>
  </div>
);
