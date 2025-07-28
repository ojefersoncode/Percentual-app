'use client';
import { Button } from '@/components/ui/button';

export default function Actionleads() {
  return (
    <div className="flex gap-4">
      <Button
        variant="ghost"
        className="rounded-lg p-3 w-44 max-md:w-full max-md:text-sm text-background dark:text-text dark:bg-background 
        border hover:bg-white/80 dark:hover:bg-white/5 transition-all"
        type="submit"
      >
        Saiba mais
      </Button>
      <Button
        variant="ghost"
        className="rounded-lg p-3 w-44 max-md:w-full max-md:text-sm text-text dark:text-text
         bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn/80 transition-all"
        type="submit"
      >
        Cadastre-se
      </Button>
    </div>
  );
}
