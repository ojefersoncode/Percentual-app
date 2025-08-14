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
  price: number;
  image: string;
}

export function CarouselBanner() {
  const products: Product[] = [
    {
      id: 1,
      title: 'Box vermelha',
      price: 5.0,
      image: 'Banners/1.png'
    },
    {
      id: 2,
      title: 'Box Azul',
      price: 10.0,
      image: 'Banners/2.png'
    },
    {
      id: 3,
      title: 'Box Amarela',
      price: 19.9,
      image: 'Banners/3.png'
    }
  ];

  return (
    <div className="flex w-full justify-center items-center overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3 "
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
