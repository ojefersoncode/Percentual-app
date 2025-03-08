'use client';
import { Button } from '../../components/ui/button';
import { buttonVariants } from '../../components/ui/button';
import { HeroCards } from './HeroCards';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start mx-7 max-md:mx-4 space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r text-slate-900 dark:text-gray-100  ">
              Aprender trading crypto,
            </span>{' '}
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r text-red-600 bg-clip-text">
              sem por em risco seus investimentos
            </span>{' '}
          </h2>
        </main>

        <p className="text-base text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Com a Leptrum, você cria seu catálogo online, gerencia tudo com
          facilidade e utiliza o poder da AI para levar seu negócio a um novo
          nível.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Começar agora</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full bg-none md:w-1/3 ${buttonVariants({
              variant: 'outline'
            })}`}
          >
            Acessar conta
          </a>
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
