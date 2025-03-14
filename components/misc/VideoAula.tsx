'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { SelectAula } from '../VideoAulaComponents/SelectAula';

export default function VideoAulas({ user }: { user: User }) {
  // Estado para armazenar o comentário
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
    <div className="flex w-full flex-col items-center bg-gray-100 dark:bg-black dark:bg-muted/40 min-h-screen">
      <nav className="flex w-full justify-between py-4 max-md:px-4 md:px-8 bg-black ">
        <div className="flex gap-2 text-xl font-bold items-center">
          <img className="size-7" src="/Leptrum.png" alt="logo" />
          <div className="flex">
            <h1 className="text-slate-50">Codersaas</h1>
          </div>
        </div>

        <Navbar />
      </nav>

      <div className="w-full max-w-4xl my-7 bg-muted/40 px-2">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>

      <div className='flex w-full justify-between max-w-4xl px-2'>
        <SelectAula />

        <Button
        variant={'outline'}
          onClick={() => alert('Redirecionando para a Aula 2...')}
          className="mb-6 px-4 py-2 text-lg text-white rounded-lg"
        >
          Pular para Aula 2
        </Button>
      </div>

      {/* Comentários */}
      <div className="w-full max-w-4xl px-2">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4 ">
          Comentários
        </h2>

        {/* Formulário de comentário */}
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escreva seu comentário..."
            className="w-full p-4 border border-gray-300 rounded-lg dark:bg-black dark:bg-muted/40 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
            rows={4}
          />
          <Button
            type="submit"
            className="mt-2 px-6 py-2 text-lg bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            Enviar Comentário
          </Button>
        </form>

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
            >
              <p className="text-gray-800 dark:text-gray-200">{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
