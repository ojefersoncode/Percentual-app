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
      title: 'Box vermelha',
      price: 5.0,
      image: 'Boxes/Red.png'
    },
    {
      id: 2,
      title: 'Box Azul',
      price: 10.0,
      image: 'Boxes/Blue.png'
    },
    {
      id: 3,
      title: 'Box Amarela',
      price: 19.9,
      image: 'Boxes/Yellow.png'
    },
    {
      id: 4,
      title: 'Box Secreta',
      price: 49.9,
      image: 'Boxes/Black.png'
    },
    {
      id: 5,
      title: 'Box Super',
      price: 99.9,
      image: 'Boxes/Roxo.png'
    },
    {
      id: 6,
      title: 'Box Ultra',
      price: 199.9,
      image: 'Boxes/Green.png'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full bg-background">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 justify-between items-center rounded-md text-white border border-border bg-transparent hover:scale-105 transition-all duration-300 z-10"
        >
          <h1 className="font-bold text-base max-md:text-xs text-center pt-4 pb-1">
            {product.title}
          </h1>
          <img
            src={product.image}
            alt={product.title}
            className="h-32 max-md:h-20 object-contain"
          />
          <div className="bg-subbackground px-4 p-0.5 rounded-t-xl">
            <span className="font-medium text-sm max-md:text-[0.60rem]">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
