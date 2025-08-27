'use client';

import React from 'react';
import Image from 'next/image';
import { User } from '@supabase/supabase-js';
import { Button } from '../ui/button';
import GiftBox from '../HistoryComponents/GiftsBox';
import { ChevronLeft } from 'lucide-react';
import Footer from '../HomeComponents/Footer';
import { createClient } from '../../utils/supabase/client';
import { useBalance } from '../HomeComponents/BalanceContext';
const supabase = createClient();

interface Product {
  rtp: number;
  name: string;
  price: number;
  img: string;
}

export function Spin({ user }: { user: User }) {
  const { balance, setBalance } = useBalance();
  const [winnerIndex, setWinnerIndex] = React.useState<number | null>(null);

  const baseItems = [
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

  const clickAudio =
    typeof Audio !== 'undefined' ? new Audio('/sounds/click.mp3') : null;
  const buttonAudio =
    typeof Audio !== 'undefined' ? new Audio('/sounds/botao.mp3') : null;

  // triplica para looping infinito
  const items = React.useMemo(
    () => [...baseItems, ...baseItems, ...baseItems],
    []
  );

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [currentScroll, setCurrentScroll] = React.useState<number | null>(null);

  // escolhe índice pelo RTP (retorna o índice diretamente, não o item)
  const chooseIndexByRTP = React.useCallback(() => {
    const weights = baseItems.map((i) => i.rtp); // já é number
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
      if (r < weights[i]) return i;
      r -= weights[i];
    }
    return 0;
  }, []);

  // helpers de normalização
  const normalizeIntoMiddle = (el: HTMLDivElement, pos: number) => {
    const single = el.scrollWidth / 3;
    const min = single;
    const max = single * 2;
    while (pos >= max) pos -= single;
    while (pos < min) pos += single;
    return pos;
  };

  // primeira montagem e em re-renders: garante que o scroll atual é respeitado
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const single = el.scrollWidth / 3;

    if (currentScroll === null) {
      const start = single;
      el.scrollLeft = start;
      setCurrentScroll(start);
    } else {
      if (winnerIndex !== null) {
        // Recalcular baseado no índice vencedor
        const middleStartIndex = baseItems.length;
        const targetIndex = middleStartIndex + winnerIndex;
        const targetElement = el.children[targetIndex] as HTMLElement;

        if (targetElement) {
          const desired =
            targetElement.offsetLeft -
            el.clientWidth / 2 +
            targetElement.clientWidth / 2;

          const fixed = normalizeIntoMiddle(el, desired);
          el.scrollLeft = fixed;
          setCurrentScroll(fixed);
        }
      } else {
        // Se ainda não tem vencedor, normaliza o scroll atual
        const fixed = normalizeIntoMiddle(el, currentScroll);
        el.scrollLeft = fixed;
        setCurrentScroll(fixed);
      }
    }

    const onResize = () => {
      if (!containerRef.current) return;
      const node = containerRef.current;

      if (winnerIndex !== null) {
        // Reposicionar no item vencedor quando redimensionar
        const middleStartIndex = baseItems.length;
        const targetIndex = middleStartIndex + winnerIndex;
        const targetElement = node.children[targetIndex] as HTMLElement;

        if (targetElement) {
          const desired =
            targetElement.offsetLeft -
            node.clientWidth / 2 +
            targetElement.clientWidth / 2;

          const fixed = normalizeIntoMiddle(node, desired);
          node.scrollLeft = fixed;
          setCurrentScroll(fixed);
        }
      } else {
        const fixed = normalizeIntoMiddle(node, node.scrollLeft);
        node.scrollLeft = fixed;
        setCurrentScroll(fixed);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentScroll, winnerIndex]);

  const spendBalance = async (amount: number) => {
    if (!user) return false;

    const { data, error } = await supabase
      .from('users')
      .select('balance')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Erro ao buscar saldo:', error);
      return false;
    }

    const currentBalance = Number(data?.balance ?? 0);

    if (currentBalance < amount) {
      alert('Saldo insuficiente!');
      return false;
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({ balance: currentBalance - amount })
      .eq('id', user.id);

    if (updateError) {
      console.error('Erro ao atualizar saldo:', updateError);
      return false;
    }

    // Atualiza o saldo local
    if (setBalance) setBalance(currentBalance - amount);

    return true;
  };

  // função para buscar saldo atualizado no Supabase
  const fetchBalance = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('users')
      .select('balance')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Erro ao buscar saldo:', error);
      return;
    }

    if (setBalance) setBalance(Number(data?.balance ?? 0));
  };

  const startSpin = async () => {
    if (isSpinning) return;
    const success = await spendBalance(100); // 100 é o valor que custa girar a roleta
    if (!success) return; // se não conseguiu gastar, não gira

    if (buttonAudio) buttonAudio.play(); // toca som do botão

    const el = containerRef.current;
    if (!el) return;
    setIsSpinning(true);

    // delay de 1.5 segundos antes de começar a roleta
    setTimeout(() => {
      const single = el.scrollWidth / 3;
      const min = single;
      const max = single * 2;

      // normaliza ponto de partida no bloco do meio
      const start = normalizeIntoMiddle(el, el.scrollLeft);
      el.scrollLeft = start;

      // índice vencedor pelo RTP
      const winnerIndex = chooseIndexByRTP();
      setWinnerIndex(winnerIndex);
      // escolhe o elemento alvo no bloco do meio
      const middleStartIndex = baseItems.length;
      const targetIndex = middleStartIndex + winnerIndex;
      const targetElement = el.children[targetIndex] as HTMLElement | undefined;

      if (!targetElement) {
        setIsSpinning(false);
        return;
      }

      // posição centralizada do alvo
      const desired =
        targetElement.offsetLeft -
        el.clientWidth / 2 +
        targetElement.clientWidth / 2;

      let laps = 2; // voltas extras
      let distance = desired - start + laps * single;
      while (distance <= 0) distance += single;

      const duration = 3000; // duração do spin
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const t0 = performance.now();

      const frame = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = easeOutCubic(p);
        let pos = start + distance * eased;

        while (pos >= max) pos -= single;
        while (pos < min) pos += single;

        el.scrollLeft = pos;

        // detectar item central
        const children = Array.from(el.children) as HTMLElement[];
        const middle = el.clientWidth / 2;
        children.forEach((child) => {
          const childCenter =
            child.offsetLeft + child.clientWidth / 2 - el.scrollLeft;
          if (Math.abs(childCenter - middle) < 5) {
            if (clickAudio && clickAudio.paused) clickAudio.play();
          }
        });

        if (p < 1) {
          requestAnimationFrame(frame);
        } else {
          const finalPos = normalizeIntoMiddle(el, desired);
          el.scrollLeft = finalPos;
          setCurrentScroll(finalPos);
          setIsSpinning(false);
        }
      };

      requestAnimationFrame(frame);
    }, 1500); // 1500ms = 1.5 segundos
  };

  return (
    <div className="relative flex flex-col gap-6 w-full min-h-screen">
      <div className="flex w-full justify-between items-center px-2">
        <div className="flex items-center text-nowrap pt-6 text-text dark:text-text hover:text-white/80">
          <ChevronLeft className="size-5 max-md:size-4" />
          <span className="font-bold text-sm max-md:text-sm">
            Voltar pagina
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="h-8"></div>
        {/* ponteiro central */}
        <div className="absolute  top-20 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="/pin.png" // marcador da roleta
            className="max-md:size-8 size-10"
            alt="marcador"
          />
        </div>

        <div
          ref={containerRef}
          className="w-full overflow-hidden flex gap-3 no-scrollbar"
          style={{ scrollBehavior: 'auto' }} // garante que o controle é 100% do JS
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-[150px] flex-shrink-0">
              <div className="bg-gradient-to-b from-subbackground to-btn border border-border rounded-md">
                <div className="flex flex-col items-center justify-center">
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
                <div className=" flex justify-center items-center">
                  <span className="font-medium text-text text-sm max-md:text-xs bg-subbackground px-4 py-1 rounded-t-xl">
                    R$:{item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <Button
            onClick={startSpin} // botão para girar roleta com auidio botao.mp3
            disabled={isSpinning}
            className="p-6 border-2 text-text dark:text-text bg-btn dark:bg-btn dark:hover:bg-btn hover:bg-btn  text-base font-bold"
          >
            {isSpinning ? 'Girando...' : 'Abrir por  R$: 100,00'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center px-6 pb-6 max-md:pb-28 mt-5 border-t-2 border-btn ">
        <span className="py-6 text-white font-bold text-2xl max-md:text-xl">
          Presentes da caixa
        </span>
        <GiftBox />
      </div>
    </div>
  );
}
