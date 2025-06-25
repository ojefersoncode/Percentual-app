'use client';
import React from 'react';
import { useTheme } from '@/components/landing/theme-provider';
import { Moon, Sun, Laptop2 } from 'lucide-react';
import type { Theme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark' | 'system'; icon: React.ReactNode; label: string }[] = [
    { value: 'system', icon: <Laptop2 className="w-4 h-4" />, label: 'Sistema' },
    { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Claro' },
    { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Escuro' },
  ];

  return (
    <div className="flex items-center bg-muted text-muted-foreground border rounded-full px-2 py-1 gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value as Theme)}
          className={`p-2 rounded-full transition-colors ${
            theme === option.value ? 'bg-background text-foreground' : 'hover:bg-accent'
          }`}
          aria-label={option.label}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
