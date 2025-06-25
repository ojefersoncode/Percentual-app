'use client';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark'; icon: React.ReactNode; label: string }[] = [
    {
      value: 'light',
      icon: <Sun className="w-4 h-4" />,
      label: 'Claro',
    },
    {
      value: 'dark',
      icon: <Moon className="w-4 h-4" />,
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
            className={`flex items-center justify-center w-8 h-7 transition-colors duration-200 ${
              isActive
                ? 'bg-white text-black dark:bg-gray-700 dark:text-white border border-gray-500'
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
