'use client';
import { HeroCards } from './HeroCards';
import Actionleads from './Actionleads';

export default function HeroLeads() {
  return (
    <section className="flex flex-col px-2 pt-7 md:pt-16 gap-10 max-md:gap-7">
      <div className="flex flex-col w-full justify-center items-center text-center lg:text-start mx-7 max-md:mx-4 space-y-4">
        <main className="flex w-full justify-center text-4xl md:text-7xl font-bold">
          <span className=" bg-gradient-to-r text-slate-900 dark:text-gray-100">
            Agora seus sites tem{' '}
            <h2 className="text-btn">10x mais segurança.</h2>
          </span>
        </main>

        <div className="justify-center items-center pt-4">
          <Actionleads />
        </div>
      </div>

      <div className="px-2 pt-4">
        <HeroCards />
      </div>
    </section>
  );
}
