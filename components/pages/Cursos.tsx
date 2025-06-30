'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { Bell } from 'lucide-react';

export default function Cursos({ user }: { user: User }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const curso = [
    { id: 1, name: 'Supabase', imageUrl: '/Supabase.png' },
    { id: 2, name: 'Node js', imageUrl: '/Nodejs.png' },
    { id: 3, name: 'SaaS web', imageUrl: '/Saas.png' },
    { id: 4, name: 'Segurança web', imageUrl: '/Sec.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-white dark:bg-background touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-background border-b border-gray-500/40 dark:border-border">
          <div className="flex items-center">
            <img className="size-8" src="/LogoC.png" alt="logo" />
          </div>

          <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
        </nav>

        <div className="mx-auto grid w-full max-w-7xl gap-4 py-10 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {curso.map((curso) => (
            <div
              key={curso.id}
              className="border border-gray-200 dark:border-border bg-gray-200 dark:bg-subbackground rounded-lg shadow-md hover:shadow-lg transition-all"
              onMouseEnter={() => setHoveredId(curso.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <img
                  src={curso.imageUrl}
                  alt={curso.name}
                  className={`w-full object-cover rounded-lg transition-all ${
                    hoveredId !== null && hoveredId !== curso.id
                      ? 'blur-sm opacity-100'
                      : 'blur-none opacity-100'
                  }`}
                />
                <div className="flex w-full justify-between items-center p-4">
                <h1 className="font-sans text-base">
                  {curso.name}
                </h1>
                  <h2 className="font-mono text-sm">
                  Duração 36h
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
