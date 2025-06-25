'use client';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark'; icon: React.ReactNode; label: string }[] = [
    { value: 'light', icon: <Sun className="size-3 text-background dark:text-text" />, label: 'Claro' },
    { value: 'dark', icon: <Moon className="size-3 text-background dark:text-text" />, label: 'Escuro' },
  ];

  return (
    <div className="flex items-center bg-muted text-muted-foreground border rounded-full px-2 py-0 gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`rounded-full transition-colors ${
            theme === option.value ? 'bg-gray-200 dark:bg-background text-text dark:text-text' : 'hover:bg-accent'
          }`}
          aria-label={option.label}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
