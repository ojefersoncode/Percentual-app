'use client';

import type { JSX } from 'react';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    name: 'Next.js',
    icon: <img src="/nextjs.svg" alt="Next js logo" className="size-16 md:size-32" />
  },
  {
    name: 'Supabase',
    icon: <img src="/supabase.svg" alt="Supabase logo" className="size-28 md:size-52" />
  },
  {
    name: 'Vercel',
    icon: <img src="/vercel.svg" alt="Vercel logo" className="size-20 md:size-36" />
  },
  {
    name: 'Stripe',
    icon: <img src="/stripe.svg" alt="Stripe logo" className="size-16 md:size-40" />
  }
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container text-center">
      <h2 className="text-2xl md:text-6xl font-bold text-red-600">
        Stack que usamos nos projetos
      </h2>

      <div className="relative flex items-center overflow-hidden w-full gap-12">
        <div className="flex w-full justify-center gap-7 md:gap-12 animate-pulse items-center">
          {[...sponsors].map(({ icon, name }) => (
            <div key={name} className="inline-flex justify-center">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
