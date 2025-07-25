'use client';
import { HeroCards } from './HeroCards';
import Actionleads from './Actionleads';

export default function HeroLeads() {
  return (
    <section className="flex items-center justify-around max-lg:px-4 max-lg:flex-col pt-7 lg:pt-20 max-lg:gap-6">
      <div className="flex flex-col space-y-3">
        <main className="flex w-full text-4xl md:text-5xl font-bold">
          <span className="text-slate-900 dark:text-gray-100">
            Solução de segurança <h2 className="text-btn">ideal para sites.</h2>
          </span>
        </main>

        <p className="max-w-md">
          Almente a segurança do seu site e monitore em tempo real todas as
          atividades que ocorrem no seu sites
        </p>

        <div className="pt-2 md:pt-3">
          <Actionleads />
        </div>
      </div>

      <div>
        <HeroCards />
      </div>
    </section>
  );
}
