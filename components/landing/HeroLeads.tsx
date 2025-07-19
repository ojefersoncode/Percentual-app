'use client';
import { HeroCards } from './HeroCards';
import Actionleads from './Actionleads';

export default function HeroLeads() {
  return (
    <section className="flex justify-around max-md:px-4 max-md:flex-col pt-7 md:pt-16 max-md:gap-7">
      <div className="flex flex-col space-y-4">
        <main className="flex w-full text-4xl md:text-5xl font-bold">
          <span className="text-slate-900 dark:text-gray-100">
            Solução de segurança <h2 className="text-btn">ideal para sites.</h2>
          </span>
        </main>

        <p className="max-w-md">
          Almente a segurança do seu site e monitore em tempo real todas as
          atividades que ocorrem no seu sites
        </p>

        <div className="pt-4">
          <Actionleads />
        </div>
      </div>

      <div className="max-md:pt-6">
        <HeroCards />
      </div>
    </section>
  );
}
