'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function MyGifts() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Cabo usb',
      image: '/Gifts/caboc.png',
      price: 10.0
    },
    {
      id: 2,
      name: 'Mouse pad',
      image: '/Gifts/mousepad.png',
      price: 10.0
    },

    {
      id: 3,
      name: 'Carregador',
      image: '/Gifts/carregador.webp',
      price: 15.0
    },
    {
      id: 4,
      name: 'Power bank',
      image: '/Gifts/powerbank.png',
      price: 20.0
    },
    {
      id: 5,
      name: 'Headset',
      image: '/Gifts/headset.png',
      price: 5.0
    },
    {
      id: 6,
      name: 'Teclado',
      image: '/Gifts/teclado.png',
      price: 30.9
    },
    {
      id: 7,
      name: 'Mouse',
      image: '/Gifts/mouse.png',
      price: 30.9
    },
    {
      id: 8,
      name: 'Hub usb',
      image: '/Gifts/hubusb.png',
      price: 30.9
    },
    {
      id: 9,
      name: 'microfone',
      image: '/Gifts/microfone.png',
      price: 30.9
    },
    {
      id: 10,
      name: 'Volante',
      image: '/Gifts/volante.png',
      price: 30.9
    },
    {
      id: 11,
      name: 'Ssd 128gb',
      image: '/Gifts/ssd.png',
      price: 30.9
    },
    {
      id: 12,
      name: 'Fonte 500w',
      image: '/Gifts/fonte.png',
      price: 30.9
    },
    {
      id: 13,
      name: 'Watercooler',
      image: '/Gifts/watercooler.png',
      price: 30.9
    },
    {
      id: 14,
      name: 'Placa de video',
      image: '/Gifts/placadevideo.png',
      price: 30.9
    },
    {
      id: 15,
      name: 'Cabo Hdmi',
      image: '/Gifts/cabohdmi.png',
      price: 17.0
    }
  ];

  return (
    <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 justify-between items-center rounded-lg text-white border-2 border-border bg-gradient-to-b from-subbackground to-btn"
        >
          <div className="flex w-full justify-between p-2"></div>

          <img
            src={product.image}
            alt={product.name}
            className="h-24 max-md:h-20 object-contain select-none"
          />
          <h1 className="font-bold text-base max-md:text-sm text-center py-1">
            {product.name}
          </h1>

          <div className="w-full flex flex-col gap-2 px-2 justify-center items-center pb-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-high/20 hover:bg-high/30 dark:hover:bg-high/20 border border-high rounded-md">
                  <span className="text-xs md:text-sm font-semibold">
                    Resgatar
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-background dark:bg-background border-2 border-border dark:border-border text-text dark:text-text">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Voçe deseja rasgatar esse item?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-text/90 dark:text-text/90 py-2">
                    Apos resgatar esse item não sera mais possivel vender-lo,
                    leia as resgras para saber como receber o seu item no menu
                    de regras.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 dark:bg-red-600 hover:bg-red-600 text-text dark:text-text hover:text-text dark:hover:text-text  border-none">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-high dark:bg-high hover:bg-high text-text dark:text-text hover:text-text dark:hover:text-text  border-none">
                    Confirmar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-red-600/20 hover:bg-red-600/30 dark:hover:bg-subbackground/20 border border-red-500 rounded-md">
                  <span className="text-xs md:text-sm  font-semibold">
                    Vender por R$:{product.price.toFixed(2)}
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-background dark:bg-background border-2 border-border dark:border-border text-text dark:text-text">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Voçe deseja vender esse item?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-text/90 dark:text-text/90 py-2">
                    Apos vender esse item não sera mais possivel resgata-lo, o
                    valor do item sera convertido em saldo em sua conta, onde
                    voçe pode jogar mais, o realizar o saque, leia as resgras
                    para saber mais.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 dark:bg-red-600 hover:bg-red-600 text-text dark:text-text hover:text-text dark:hover:text-text  border-none">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-high dark:bg-high hover:bg-high text-text dark:text-text hover:text-text dark:hover:text-text  border-none">
                    Confirmar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ))}
    </div>
  );
}
