'use client';
import { HeroCards } from './HeroCards';
import Actionleads from './Actionleads';

export default function HeroLeads() {
  return (
    <section
      className="flex flex-col w-full items-center justify-center px-6 pt-7 gap-6 
    bg-gradient-to-b from-white via-white to-btn dark:from-background dark:via-background dark:to-btn "
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <main className="flex justify-center text-center w-full text-3xl md:text-6xl font-bold">
          <span className="text-slate-900 dark:text-gray-100">
            Solução de segurança{' '}
            <h2 className="text-btn">ideal para sites e apps</h2>
          </span>
        </main>

        <p className="text-center max-w-lg md:text-lg max-md:text-sm max-md:max-w-xs font-semibold text-background/80 dark:text-text/80">
          Almente a segurança do seu site e monitore em tempo real todas as
          atividades que ocorrem no seu sites
        </p>

        <div className="flex justify-center items-center">
          <Actionleads />
        </div>
      </div>

      <div>
        <HeroCards />
      </div>
    </section>
  );
}
