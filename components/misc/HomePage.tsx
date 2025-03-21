'use client';

import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { ModeToggle } from '../landing/mode-toggle';
import Search from '../HomeComponents/Search';

export default function HomePage({ user }: { user: User }) {
  const projects = [
    { id: 1, name: 'Template SaaS web', imageUrl: '/cooderfy.png' },
    { id: 2, name: 'Template Ecommerc web', imageUrl: '/cooderfy.png' },
    { id: 3, name: 'Template Ecommerc Mobile', imageUrl: '/cooderfy.png' },
    {
      id: 4,
      name: 'Template Landing Page dentista',
      imageUrl: '/cooderfy.png'
    },
    { id: 5, name: 'Template Landing Page oficina', imageUrl: '/cooderfy.png' },
    { id: 6, name: 'Template Landing Page evento', imageUrl: '/cooderfy.png' }
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

<div>
  <Search />
</div>

        <div
          className="mx-auto grid w-full max-w-7xl gap-10 py-4 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          bg-gray-100 dark:bg-black dark:bg-muted/40"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="border bg-black rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg rounded-b-sm"
                />
              </div>
              <div className="flex w-full justify-between items-center border-t px-3 py-2 bg-white dark:bg-black">
                <h1 className="text-base font-semibold text-gray-900 dark:text-gray-200 bg-white dark:bg-black p-2">
                  {project.name}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
