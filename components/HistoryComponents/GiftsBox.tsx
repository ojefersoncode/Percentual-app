'use client';

import { Badge } from '../ui/badge';

interface Product {
  rtp: number;
  name: string;
  price: number;
  img: string;
}

export default function GiftBox() {
  const products: Product[] = [
    {
      name: 'Mouse gamer',
      img: '/Gifts/mouse.png',
      rtp: 80.01,
      price: 50.0
    },
    {
      name: 'Cabo usb C',
      img: '/Gifts/caboc.png',
      rtp: 80.01,
      price: 18.0
    },
    {
      name: 'Carregador',
      img: '/Gifts/carregador.webp',
      rtp: 20.01,
      price: 25.0
    },
    {
      name: 'Power bank',
      img: '/Gifts/powerbank.png',
      rtp: 2.0,
      price: 37.9
    },
    {
      name: 'Headset',
      img: '/Gifts/headset.png',
      rtp: 4.0,
      price: 230.0
    },
    {
      name: 'Teclado',
      img: '/Gifts/teclado.png',
      rtp: 1.01,
      price: 129.9
    },
    {
      name: 'Hub usb',
      img: '/Gifts/hubusb.png',
      rtp: 80.01,
      price: 20.0
    },
    {
      name: 'Mouse pad',
      img: '/Gifts/mousepad.png',
      rtp: 4.0,
      price: 40.0
    },
    {
      name: 'Microfone',
      img: '/Gifts/microfone.png',
      rtp: 2.21,
      price: 160.0
    },
    {
      name: 'Volante',
      img: '/Gifts/volante.png',
      rtp: 1.01,
      price: 450.0
    },
    {
      name: 'Carregador',
      img: '/Gifts/carregador.webp',
      rtp: 20.01,
      price: 25.0
    },
    {
      name: 'Carregador',
      img: '/Gifts/carregador.webp',
      rtp: 20.01,
      price: 25.0
    },
    {
      name: 'SSD 128GB',
      img: '/Gifts/ssd.png',
      rtp: 3.31,
      price: 98.9
    },
    {
      name: 'Fonte 500w',
      img: '/Gifts/fonte.png',
      rtp: 6.02,
      price: 150.0
    },
    {
      name: 'Watercooler',
      img: '/Gifts/watercooler.png',
      rtp: 19.0,
      price: 299.9
    },
    {
      name: 'Cabo Hdmi',
      img: '/Gifts/cabohdmi.png',
      rtp: 80.01,
      price: 10.0
    },
    {
      name: 'Placa de vídeo',
      img: '/Gifts/placadevideo.png',
      rtp: 0.03,
      price: 1500.0
    },
    {
      name: 'Monitor',
      img: '/Gifts/monitor.png',
      rtp: 0.03,
      price: 800.0
    },
    {
      name: 'Microfone',
      img: '/Gifts/microfone.png',
      rtp: 0.03,
      price: 150.0
    },
    {
      name: 'Volante',
      img: '/Gifts/volante.png',
      rtp: 0.03,
      price: 400.0
    },
    {
      name: 'Cabo Hdmi',
      img: '/Gifts/cabohdmi.png',
      rtp: 80.01,
      price: 10.0
    }
  ];

  return (
    <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 justify-between items-center rounded-lg text-white border-2 border-border bg-gradient-to-b from-subbackground to-btn"
        >
          <div className="flex w-full justify-between p-2">
            <Badge className="text-text dark:text-text bg-btn dark:bg-btn">
              Rtp: {product.rtp}
            </Badge>
          </div>

          <img
            src={product.img}
            alt={product.name}
            className="h-24 max-md:h-20 object-contain select-none"
          />
          <h1 className="font-bold text-base max-md:text-sm text-center py-1">
            {product.name}
          </h1>

          <div className="bg-subbackground px-4 p-0.5 rounded-t-xl">
            <span className="text-sm font-semibold">
              {' '}
              R$:{product.price.toFixed(2)}{' '}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
