'use client';

import { useTheme } from '../landing/theme-provider'; // Importe o hook 'useTheme' do seu contexto

export const HeroCards = () => {
  const { theme } = useTheme(); // Pega o tema atual

  return (
    <div
      className="flex dark:bg-background rounded-lg border
     border-zinc-300 dark:border-zinc-700"
    >
      <img
        src={theme === 'dark' ? '/Plataforma.png' : '/plataforma2.png'}
        alt="Cooderfy"
        className="rounded h-auto w-[500px] max-lg:w-full"
      />
    </div>
  );
};
