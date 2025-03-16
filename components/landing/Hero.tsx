'use client';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { buttonVariants } from '../../components/ui/button';
import { HeroCards } from './HeroCards';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center px-2 py-14 md:py-28 gap-8">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-slate-900 dark:text-gray-100  ">
              Aprender desenvolver seus SaaS,
            </span>{' '}
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-red-600 bg-clip-text">
              de forma rapida e simples.
            </span>{' '}
          </h2>
        </main>

        <p className="text-base text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Com a Codersaas, você cria seu SaaS de forma rápida, fácil e segura.
          Gerencie tudo com facilidade através de uma dashboard incrível e tenha
          total controle do seu negócio.
        </p>

        <div className="flex w-full max-sm:justify-center items-center pt-5 pb-4">
          <Link href="/Home" passHref className='bg-red-600 rounded-lg'>
            <Button className="border bg-red-600 animate-bounce mb-1">
              <span className='text-lg font-semibold text-gray-700 px-16'>
                 Acessar agora
                </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 mt-16">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
