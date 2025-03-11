'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '../../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { Navbar } from '../../../components/landing/Navbar';
import { AuthState } from '../../../utils/types';

const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    image: '/project1.png'
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    image: '/project2.png'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    image: '/project3.png'
  }
];

export default async function Home({ params, searchParams }: { params: { id: string }, searchParams: { disable_button: boolean } }) {
  const currState = params.id as AuthState;

  if (!Object.values(AuthState).includes(currState)) {
    redirect('/auth');
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user && currState !== 'update_password') {
    return redirect('/');
  } else if (!user && currState === 'update_password') {
    return redirect('/auth');
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar user={user} />

      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Codersaas</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/templates" className="hover:text-blue-600">Templates</Link>
            <Link href="/components" className="hover:text-blue-600">Componentes</Link>
            <Link href="/profile" className="hover:text-blue-600">Perfil</Link>
          </div>
        </nav>

        <main className="container mx-auto p-8">
          <h2 className="text-2xl font-semibold mb-6">Projetos Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-md"
                />
                <h3 className="text-lg font-bold mt-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Baixar
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
