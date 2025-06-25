'use client';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark'; icon: React.ReactNode; label: string }[] = [
    {
      value: 'light',
      icon: <Sun className="w-4 h-4" />, // menor ícone
      label: 'Claro',
    },
    {
      value: 'dark',
      icon: <Moon className="w-4 h-4" />,
      label: 'Escuro',
    },
  ];

  return (
    <div className="flex h-6 items-center border border-gray-200 dark:border-border rounded-full overflow-hidden bg-gray-200 dark:bg-background">
      {options.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            type="button"
            aria-label={option.label}
            className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors duration-200 ${
              isActive
                ? 'bg-gray-300 text-black dark:bg-subbackground dark:text-white'
                : 'text-gray-400'
            }`}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
}
