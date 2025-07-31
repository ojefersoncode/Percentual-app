'use client';
import { Button } from '@/components/ui/button';

export default function Actionleads() {
  return (
    <div className="flex gap-4">
      <Button
        className="rounded-lg p-3 max-md:p-1 w-44 max-md:w-32 max-md:text-xs text-background dark:text-text bg-slate-100 dark:bg-background 
        border border-zinc-400 dark:border-zinc-700 hover:bg-white/80 dark:hover:bg-white/5 transition-all"
        type="submit"
      >
        Saiba mais
      </Button>
      <Button
        className="rounded-lg p-3 max-md:p-1 w-44 max-md:w-32 max-md:text-xs text-text dark:text-text
         border-none bg-btn dark:bg-btn/80 hover:bg-btn/90 dark:hover:bg-btn transition-all"
        type="submit"
      >
        Cadastre-se
      </Button>
    </div>
  );
}
