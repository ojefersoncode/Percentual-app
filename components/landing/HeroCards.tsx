'use client';

import { useTheme } from '../landing/theme-provider'; // Importe o hook 'useTheme' do seu contexto

export const HeroCards = () => {
  const { theme } = useTheme(); // Pega o tema atual

  return (
    <div className="flex justify-center items-center dark:bg-subbackground rounded-lg border
     border-zinc-300 dark:border-zinc-700">
      <img
        src={theme === 'dark' ? '/Plataforma.png' : '/plataforma2.png'}
        alt="Cooderfy"
        className="rounded h-auto w-[600px] max-lg:w-full"
      />
    </div>
  );
};
