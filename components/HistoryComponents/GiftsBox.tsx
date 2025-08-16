'use client';

interface Product {
  id: number;
  rtp: string;
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
      rtp: '80.01',
      price: 10.0
    },
    {
      id: 2,
      name: 'Mouse pad',
      image: '/Gifts/mousepad.png',
      rtp: '80.01',
      price: 10.0
    },

    {
      id: 3,
      name: 'Carregador',
      image: '/Gifts/carregador.webp',
      rtp: '20.01',
      price: 15.0
    },
    {
      id: 4,
      name: 'Power bank',
      image: '/Gifts/powerbank.png',
      rtp: '2.00',
      price: 20.0
    },
    {
      id: 5,
      name: 'Headset',
      image: '/Gifts/headset.png',
      rtp: '4.00',
      price: 5.0
    },
    {
      id: 6,
      name: 'Teclado',
      image: '/Gifts/teclado.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 7,
      name: 'Mouse',
      image: '/Gifts/mouse.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 8,
      name: 'Hub usb',
      image: '/Gifts/hubusb.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 9,
      name: 'microfone',
      image: '/Gifts/microfone.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 10,
      name: 'Volante',
      image: '/Gifts/volante.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 11,
      name: 'Ssd 128gb',
      image: '/Gifts/ssd.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 12,
      name: 'Fonte 500w',
      image: '/Gifts/fonte.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 13,
      name: 'Watercooler',
      image: '/Gifts/watercooler.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 14,
      name: 'Placa de video',
      image: '/Gifts/placadevideo.png',
      rtp: '1.01',
      price: 30.9
    },
    {
      id: 15,
      name: 'Cabo Hdmi',
      image: '/Gifts/cabohdmi.png',
      rtp: '80.01',
      price: 17.0
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 justify-between items-center rounded-lg text-white border-2 border-border bg-btn"
        >
          <h1 className="font-bold text-base max-md:text-xs text-center pt-4 pb-1">
            {product.name}
          </h1>
          <img
            src={product.image}
            alt={product.name}
            className="h-24 max-md:h-20 object-contain"
          />
          <span className="font-medium text-sm hidden max-md:text-[0.60rem]">
            RTP: {product.rtp}%
          </span>
          <div className="bg-green-700 px-4 p-0.5 rounded-t-xl">
            <span className="font-medium text-sm max-md:text-[0.60rem]">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
