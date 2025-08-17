'use client';
import { Box, Gift } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Balance from './Balance';
import { ProfileButton } from './ProfileButton';

const DATA = {
  navbar: [
    { href: '/Home', label: 'Home' },
    { href: '/Spin', label: 'Roleta' },
    { href: '/History', label: 'Histórico' },
    { href: '/Withdraw', label: 'Saque' }
  ]
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center px-4 py-2 border-b-2 border-border bg-background">
      <div className="flex items-center gap-0;5">
        <h1 className="text-xl text-white max-md:text-lg font-black">Magic</h1>
        <Box className="size-7 max-md:size-6 text-brand" />
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
                    ? 'text-brand font-bold'
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
        <div className="max-md:hidden">
          <Gift className="text-brand size-6" />
        </div>
        <Balance />
        <ProfileButton />
      </div>
    </div>
  );
}
