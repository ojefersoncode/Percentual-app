'use client';
import React from 'react';
import Link from 'next/link';
import { HomeIcon, History, Gift } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ProfileButton } from './ProfileButton';

const DATA = {
  navbar: [
    { href: '/Home', icon: HomeIcon, label: 'Home' },
    { href: '/Spin', icon: Gift, label: 'Bônus' },
    { href: '/History', icon: History, label: 'Histórico' }
  ]
};

export function Navbottom() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-20 left-0 w-full bg-background border-t border-border">
      <div className="flex w-full justify-around items-center">
        {DATA.navbar.map((item, index) => {
          const isActive = pathname.startsWith(item.href);
          const base = isActive ? 'text-brand' : 'text-text/70';
          const hover = isActive
            ? ''
            : 'group-hover:text-white transition-all duration-300';

          return (
            <Link key={index} href={item.href} className="p-4 group">
              <div className="flex flex-col justify-between items-center gap-2">
                <item.icon className={`h-5 w-5 ${base} ${hover}`} />
                <span className={`text-sm font-bold ${base} ${hover}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}

        {/* Aqui entra o ProfileButton como último item da navbar */}
        <div className="p-4 flex flex-col justify-between items-center gap-2">
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
