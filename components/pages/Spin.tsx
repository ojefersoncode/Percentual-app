'use client';

import React from 'react';
import Image from 'next/image';
import { User } from '@supabase/supabase-js';
import { Button } from '../ui/button';
import Navbar from '../HomeComponents/Navbar';
import GiftBox from '../HomeComponents/GiftsBox';
import { ChevronLeft } from 'lucide-react';
import Footer from '../HomeComponents/Footer';

export function Spin({ user }: { user: User }) {
  const baseItems = [
    { name: 'Sand Dune', img: '/Boxes/Red.png' },
    { name: 'Aloha', img: '/Boxes/Blue.png' },
    { name: 'Desert Storm', img: '/Boxes/Roxo.png' },
    { name: 'Coolant', img: '/Boxes/Yellow.png' },
    { name: 'Nova', img: '/Boxes/Black.png' },
    { name: 'Aloha', img: '/Boxes/Green.png' }
  ];

  // repetir 3x para simular infinito
  const items = React.useMemo(
    () => [...baseItems, ...baseItems, ...baseItems],
    [baseItems]
  );

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isSpinning, setIsSpinning] = React.useState(false);

  // posiciona no meio (cópia do meio) ao montar / redimensionar
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const setMiddle = () => {
      const total = el.scrollWidth;
      const single = total / 3;
      el.scrollLeft = single;
    };
    // esperar um tick para garantir imagens/layout
    const t = setTimeout(setMiddle, 80);
    window.addEventListener('resize', setMiddle);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', setMiddle);
    };
  }, [items.length]);
  const alignToNearest = (el: HTMLDivElement) => {
    const children = Array.from(el.children).filter(
      (c): c is HTMLElement => c instanceof HTMLElement
    );

    if (children.length === 0) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let closest: HTMLElement | null = null;
    let closestDiff = Infinity;

    for (const child of children) {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const diff = Math.abs(childCenter - center);
      if (diff < closestDiff) {
        closestDiff = diff;
        closest = child;
      }
    }

    if (!closest) return;
    const target =
      closest.offsetLeft + closest.clientWidth / 2 - el.clientWidth / 2;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const startSpin = () => {
    const el = containerRef.current;
    if (!el || isSpinning) return;
    setIsSpinning(true);

    const total = el.scrollWidth;
    const single = total / 3;

    // garantir que começamos no meio
    el.scrollLeft = single;

    let speed = 70; // pixels por frame (ajuste à vontade)
    let distance = 0;
    const maxDistance = 3000 + Math.random() * 3000; // distância total antes de parar (aleatório)
    const slowStart = maxDistance * 0.7;

    const step = () => {
      if (!containerRef.current) return;
      const node = containerRef.current;

      node.scrollLeft += speed;
      distance += speed;

      // wrap-around: se passar da segunda cópia, volta subtraindo uma cópia
      if (node.scrollLeft >= single * 2) {
        node.scrollLeft -= single;
      }

      // desaceleração suave depois de um ponto
      if (distance > slowStart) {
        speed = Math.max(1, speed * 0.96);
      }

      if (distance < maxDistance) {
        requestAnimationFrame(step);
      } else {
        // terminar: alinhar ao item mais próximo e liberar botão
        // pequena espera para a rolagem "smooth" terminar caso precise
        alignToNearest(node);
        // aguardar um pouco pra não reapertar imediatamente
        setTimeout(() => setIsSpinning(false), 700);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="relative flex flex-col gap-6 p-4 w-full min-h-screen">
      <Navbar />

      <div className="flex w-full justify-between items-center px-2">
        <div className="flex items-center text-nowrap text-text dark:text-text hover:text-white/80">
          <ChevronLeft className="size-5 max-md:size-4" />
          <span className="font-bold text-sm max-md:text-sm">
            Voltar pagina
          </span>
        </div>

        <div className="flex">
          <h1 className=" text-white font-bold text-xl max-md:text-lg">
            Caixa Gratis
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="h-8"></div> {/* marcador central */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-subbackground z-20" />
        {/* container rolável */}
        <div
          ref={containerRef}
          className="w-full overflow-hidden flex gap-3 scroll-smooth no-scrollbar px-6"
          style={{ scrollBehavior: 'auto' }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[150px] flex-shrink-0 bg-background dark:bg-background"
            >
              <div className="bg-background dark:bg-background border-2 rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center rounded-lg bg-background dark:bg-background">
                  <div className="relative w-20 h-20 md:w-30 md:h-30">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 96px, 160px"
                      className="object-contain pt-6"
                    />
                  </div>
                  <p className="text-white my-4 font-bold text-base max-md:text-sm">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12">
          <Button
            onClick={startSpin}
            disabled={isSpinning}
            className="p-6 border-2 text-text dark:text-text bg-btn dark:bg-btn dark:hover:bg-btn hover:bg-subbackground   text-base font-medium"
          >
            {isSpinning ? 'Girando...' : 'Abrir caixa'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center p-2 py-4 mt-5 border-t-2 border-btn ">
        <span className="py-6 text-white font-bold text-lg max-md:text-base">
          Presentes da caixa
        </span>
        <GiftBox />
      </div>
      <Footer />
    </div>
  );
}
