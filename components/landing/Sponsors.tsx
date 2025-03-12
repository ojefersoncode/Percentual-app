'use client';

import type { JSX } from 'react';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    name: 'Next.js',
    icon: <img src="/nextjs.svg" alt="Next js logo" className="size-14 md:size-20" />
  },
  {
    name: 'Supabase',
    icon: <img src="/supabase.svg" alt="Supabase logo" className="size-20 md:size-32" />
  },
  {
    name: 'Vercel',
    icon: <img src="/vercel.svg" alt="Vercel logo" className="size-16 md:size-24" />
  },
  {
    name: 'Stripe',
    icon: <img src="/stripe.svg" alt="Stripe logo" className="size-14 md:size-20" />
  },
  {
    name: 'Google Cloud',
    icon: (
      <img
        src="/googlecloud.png"
        alt="Google Cloud logo"
        className="size-10 md:size-12 mix-blend-luminosity"
      />
    )
  }
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container text-center py-2">
      <h2 className="text-2xl md:text-4xl font-bold text-red-600">
        Stack que usamos nos projetos
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-1">
        {sponsors.map(({ icon, name }) => (
          <div key={name} className="flex justify-center">
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};
