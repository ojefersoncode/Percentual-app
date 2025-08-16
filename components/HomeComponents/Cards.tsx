'use client';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Cards() {
  const products: Product[] = [
    {
      id: 1,
      title: 'Box Playstation',
      price: 5.0,
      image: 'box/playstation.webp'
    },
    {
      id: 2,
      title: 'Box Anime',
      price: 10.0,
      image: 'box/anime.webp'
    },
    {
      id: 3,
      title: 'Box Amazon',
      price: 19.9,
      image: 'box/amazon.webp'
    },
    {
      id: 4,
      title: 'Box Apple',
      price: 99.9,
      image: 'box/apple.webp'
    },
    {
      id: 5,
      title: 'Box Steam',
      price: 99.9,
      image: 'box/steam.webp'
    },
    {
      id: 6,
      title: 'Box Ufc',
      price: 199.9,
      image: 'box/ufc.webp'
    },
    {
      id: 7,
      title: 'Box Ufc',
      price: 199.9,
      image: 'box/starwars.webp'
    },
    {
      id: 8,
      title: 'Box Xbox',
      price: 199.9,
      image: 'box/xbox.webp'
    },
    {
      id: 9,
      title: 'Box Magic',
      price: 199.9,
      image: 'box/magic.png'
    },
    {
      id: 10,
      title: 'Box Lububu',
      price: 199.9,
      image: 'box/lububu.png'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full dark:bg-background">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 justify-between items-center rounded-md text-white border border-border  bg-subbackground dark:bg-subbackground hover:scale-105 transition-all duration-300 z-10"
        >
          <h1 className="font-bold text-base max-md:text-xs text-center pt-4 pb-1">
            {product.title}
          </h1>
          <img
            src={product.image}
            alt={product.title}
            className="h-32 max-md:h-20 object-contain"
          />
          <div className="bg-background px-4 p-0.5 rounded-t-xl">
            <span className="font-medium text-sm max-md:text-[0.60rem]">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
