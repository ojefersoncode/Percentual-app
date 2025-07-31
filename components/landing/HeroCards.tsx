'use client';

import { useTheme } from '../landing/theme-provider'; // Importe o hook 'useTheme' do seu contexto

export const HeroCards = () => {
  const { theme } = useTheme(); // Pega o tema atual

  return (
    <div className="w-full">
      <div className="flex mx-2 rounded-t-lg border-t border-r border-l border-zinc-400 dark:border-zinc-700">
        <img
          src={theme === 'dark' ? '/Plataforma.png' : '/plataforma2.png'}
          alt="Cooderfy"
          className="lg:h-[550px] h-auto w-full rounded-t-lg"
        />
      </div>
    </div>
  );
};
