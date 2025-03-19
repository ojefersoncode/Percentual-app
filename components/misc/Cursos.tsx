'use client';

import { Button } from '../../components/ui/button';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import Link from 'next/link';
import { Footer } from '../landing/Footer';
import { ModeToggle } from '../landing/mode-toggle';

export default function Cursos({ user }: { user: User }) {
  const curso = [
    { id: 1, name: 'Supabase', imageUrl: '/codersaas.png' },
    { id: 2, name: 'Vercel deploy', imageUrl: '/codersaas.png' },
    { id: 3, name: 'Market para dev', imageUrl: '/codersaas.png' },
    { id: 4, name: 'Dominios e SEO', imageUrl: '/codersaas.png' },
    { id: 5, name: 'Trafego pago para SaaS', imageUrl: '/codersaas.png' },
    { id: 6, name: 'Programar com Ai', imageUrl: '/codersaas.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-gray-200 dark:bg-black dark:bg-muted/40">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-black">
          <div className="flex gap-2 text-xl font-bold items-center">
            <img className="size-7" src="/Leptrum.png" alt="logo" />
            <div className="flex">
              <h1 className="text-gray-900 dark:text-gray-100">Cooderfy</h1>
            </div>
          </div>

          <div className="flex gap-2">
            <ModeToggle />
            <Navbar />
          </div>
        </nav>

        <div
          className="mx-auto grid w-full max-w-7xl gap-10 py-4 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          bg-gray-100 dark:bg-black dark:bg-muted/40"
        >
          {curso.map((curso) => (
            <div
              key={curso.id}
              className="border bg-black rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={curso.imageUrl}
                  alt={curso.name}
                  className="w-full h-48 object-cover rounded-t-lg rounded-b-sm"
                />
              </div>
              <div className="flex w-full justify-between items-center border-t px-3 py-2 bg-white dark:bg-black">
                <h1 className="text-base font-semibold text-gray-900 dark:text-gray-200 bg-white dark:bg-black">
                  {curso.name}
                </h1>
                <Link href={`/video-aula`}>
                  {/*<Link href={`/video-aula${curso.id}`}></Link>*/}
                  <Button variant={'outline'} className="w-full mt-2 px-3 py-1">
                    Assistir
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
