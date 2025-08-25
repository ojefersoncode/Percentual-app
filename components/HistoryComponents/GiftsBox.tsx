'use client';

import { Badge } from '../ui/badge';

interface Product {
  id: number;
  status: string;
  name: string;
  price: number;
  image: string;
}

export default function GiftBox() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Cabo usb',
      image: '/Gifts/caboc.png',
      status: 'resgatado',
      price: 10.0
    },
    {
      id: 2,
      name: 'Mouse pad',
      image: '/Gifts/mousepad.png',
      status: 'resgatado',
      price: 10.0
    },

    {
      id: 3,
      name: 'Carregador',
      image: '/Gifts/carregador.webp',
      status: 'vendido',
      price: 15.0
    },
    {
      id: 4,
      name: 'Power bank',
      image: '/Gifts/powerbank.png',
      status: 'resgatado',
      price: 20.0
    },
    {
      id: 5,
      name: 'Headset',
      image: '/Gifts/headset.png',
      status: 'resgatado',
      price: 5.0
    },
    {
      id: 6,
      name: 'Teclado',
      image: '/Gifts/teclado.png',
      status: '1.01',
      price: 30.9
    },
    {
      id: 7,
      name: 'Mouse',
      image: '/Gifts/mouse.png',
      status: 'resgatado',
      price: 30.9
    },
    {
      id: 8,
      name: 'Hub usb',
      image: '/Gifts/hubusb.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 9,
      name: 'microfone',
      image: '/Gifts/microfone.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 10,
      name: 'Volante',
      image: '/Gifts/volante.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 11,
      name: 'Ssd 128gb',
      image: '/Gifts/ssd.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 12,
      name: 'Fonte 500w',
      image: '/Gifts/fonte.png',
      status: 'resgatado',
      price: 30.9
    },
    {
      id: 13,
      name: 'Watercooler',
      image: '/Gifts/watercooler.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 14,
      name: 'Placa de video',
      image: '/Gifts/placadevideo.png',
      status: 'vendido',
      price: 30.9
    },
    {
      id: 15,
      name: 'Cabo Hdmi',
      image: '/Gifts/cabohdmi.png',
      status: 'vendido',
      price: 17.0
    }
  ];

  const getBadgeClass = (status: string) => {
    if (status === 'resgatado')
      return 'bg-green-600 dark:bg-green-600 text-white text-xs font-semibold hover:bg-bg-green-600 dark:hover:bg-green-600';
    if (status === 'vendido')
      return 'bg-red-600 dark:bg-red-600 text-white text-xs font-semibold hover:bg-red-600 dark:hover:bg-red-600';
    return 'bg-gray-500 text-white';
  };

  return (
    <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 justify-between items-center rounded-lg text-white border-2 border-border bg-gradient-to-b from-subbackground to-btn"
        >
          <div className="flex w-full justify-between p-2">
            <Badge className={getBadgeClass(product.status)}>
              {product.status}
            </Badge>
            <Badge className="bg-btn hover:bg-btn text-xs font-semibold">
              R$ {product.price.toFixed(2)}
            </Badge>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="h-24 max-md:h-20 object-contain"
          />
          <h1 className="font-bold text-base max-md:text-xs text-center py-1">
            {product.name}
          </h1>

          <div className="bg-subbackground px-4 p-0.5 rounded-t-xl">
            <span className="text-xs font-semibold">Escolher</span>
          </div>
        </div>
      ))}
    </div>
  );
}
