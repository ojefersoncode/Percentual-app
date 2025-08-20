'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface Product {
  id: number;
  title: string;
  image: string;
}

export function CarouselBanner() {
  const products: Product[] = [
    { id: 1, title: 'Banner 1', image: 'Banners/1.png' },
    { id: 2, title: 'Banner 2', image: 'Banners/2.png' },
    { id: 3, title: 'Banner 3', image: 'Banners/3.png' }
  ];

  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex w-full justify-center items-center overflow-hidden">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ loop: true }} // 🔥 aqui ativa o infinito
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex items-center w-full gap-6 border-2 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
