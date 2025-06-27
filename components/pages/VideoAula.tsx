'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { SelectAula } from '../VideoAulaComponents/SelectAula';
import { Bell } from 'lucide-react';
import { ArrowLeftIcon } from 'lucide-react';
import { Footer } from '../landing/Footer';
import Comentarios from '../AulasComponents/Comentarios';

export default function VideoAulas({ user }: { user: User }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <nav className="flex w-full justify-between px-3 md:px-4 text-text bg-background border-b border-gray-200 dark:border-border">
        <div className="flex gap-1 py-2 items-center">
          <img className="size-7" src="/LogoC.png" alt="logo" />
          <h1 className="text-base font-sans text-text">Cooderfy</h1>
        </div>
        <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
      </nav>

      <div className="flex w-full p-4">
        <Button
          variant={'ghost'}
          className="flex items-center p-3 space-x-1 cursor-pointer border border-gray-200 dark:border-border text-background dark:text-text bg-white dark:bg-subbackground"
        >
          <ArrowLeftIcon className="size-4" />
          <span className="text-sm">Voltar</span>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <div className="flex flex-col items-center justify-center w-full bg-background rounded-lg shadow-lg">
          <video
            controls
            className="w-full h-auto rounded-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>

        <div className="flex items-center w-full gap-2 my-3 px-2">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
            Aula 1:
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-200">
            Introdução ao Supabase
          </h2>
        </div>

        <div className="flex justify-between items-center w-full mt-4 px-2">
          <SelectAula />
          <Button
            variant="ghost"
            onClick={() => alert('Redirecionando para a Aula 2...')}
            className="bg-white dark:bg-subbackground border border-gray-200 dark:border-border px-3 py-2 text-sm text-background/80 dark:text-text/80 rounded-lg"
          >
            Pular para próxima aula
          </Button>
        </div>

        <Comentarios />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
