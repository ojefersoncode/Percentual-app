'use client';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark'; icon: React.ReactNode; label: string }[] = [
    {
      value: 'light',
      icon: <Sun className="w-5 h-5" />,
      label: 'Claro',
    },
    {
      value: 'dark',
      icon: <Moon className="w-5 h-5" />,
      label: 'Escuro',
    },
  ];

  return (
    <div className="flex items-center border border-gray-500 rounded-full overflow-hidden bg-muted">
      {options.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            type="button"
            aria-label={option.label}
            className={`flex items-center justify-center w-10 h-5 transition-colors duration-200 ${
              isActive
                ? 'bg-gray-300 text-black dark:bg-subbackground dark:text-white border border-gray-200 dark:border-border'
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
