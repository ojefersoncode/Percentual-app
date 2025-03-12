'use client';

import { Button } from '../../components/ui/button';
import { CardFooter, CardTitle } from '../../components/ui/card';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import Link from 'next/link';
import { Footer } from '../landing/Footer';

export default function HomePage({ user }: { user: User }) {
  const projects = [
    { id: 1, name: 'SaaS web', imageUrl: '/codersaas.png' },
    { id: 2, name: 'Ecommerc web', imageUrl: '/codersaas.png' },
    { id: 3, name: 'Ecommerc Mobile', imageUrl: '/codersaas.png' },
    { id: 4, name: 'Landing Page dentista', imageUrl: '/codersaas.png' },
    { id: 5, name: 'Landing Page oficina', imageUrl: '/codersaas.png' },
    { id: 6, name: 'Landing Page evemto', imageUrl: '/codersaas.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-black bg-muted/40">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4">
        <nav className="flex w-full justify-between py-4 max-md:px-4 md:px-8 bg-black">
          <div className="flex gap-2 text-xl font-bold items-center">
            <img className="size-7" src="/Leptrum.png" alt="logo" />
            <div className="flex">
              <h1 className="text-slate-50">Codersaas</h1>
            </div>
          </div>

          <Navbar />
        </nav>

        {/* Cards de Projetos */}
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border bg-black rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardFooter className="w-full justify-between items-center border-t px-6 py-3 ">
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full mt-2">Ver detalhes</Button>
                </Link>
              </CardFooter>
            </div>
          ))}
        </div>

        <div className='bg-black'>
          <Footer />
        </div>
      </main>
    </div>
  );
}
