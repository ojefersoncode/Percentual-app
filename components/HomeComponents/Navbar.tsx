'use client';
import { Box } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Balance from './Balance';
import { ProfileButton } from './ProfileButton';
import AnimateBonus from './AnimatedBonus';

const DATA = {
  navbar: [
    { href: '/Home', label: 'Home' },
    { href: '/Spin', label: 'Atualizador' },
    { href: '/History', label: 'Histórico' },
    { href: '/Withdraw', label: 'Saque' }
  ]
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center px-4 py-2 border-b border-border bg-subbackground">
      <div className="flex items-center gap-0;5">
        <h1 className="text-xl text-white max-md:text-lg font-black">Magic</h1>
        <Box className="size-7 max-md:size-6 text-yellow-400" />
        <h1 className="text-xl text-white font-black">box</h1>
      </div>

      <div className="bg-transparent border-none text-white max-md:hidden">
        <div className="flex gap-6 items-center text-border text-base font-semibold">
          {DATA.navbar.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-yellow-400 font-bold'
                    : 'text-white/80 font-semibold hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <AnimateBonus />
        <Balance />
        <ProfileButton />
      </div>
    </div>
  );
}
