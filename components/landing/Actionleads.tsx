'use client';
import { Button } from '@/components/ui/button';

export default function Actionleads() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Button
      variant="ghost"
        className="p-3 max-md:text-sm text-background dark:text-text dark:bg-subbackground border hover:bg-white/80 dark:hover:bg-subbackground/80"
        type="submit">
        Saiba mais
      </Button>
      <Button
      variant="ghost"
        className="p-3 max-md:text-sm text-text dark:text-text bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn/80"
        type="submit"
      >
        Cadastre-se
      </Button>
    </div>
  );
}