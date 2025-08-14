'use client';

import { CarouselBanner } from '../landing/CarrouselBanner';
import Cards from './Cards';

export const Home = () => {
  return (
    <section className="flex flex-col bg-background dark:bg-background p-4">
      <div className="pb-8">
        <CarouselBanner />
      </div>
      <Cards />
    </section>
  );
};
