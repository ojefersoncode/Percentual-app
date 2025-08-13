'use client';
import React from 'react';
import Link from 'next/link';
import { HomeIcon, Rocket, PiggyBank, History } from 'lucide-react';

const DATA = {
  navbar: [
    { href: '#', icon: HomeIcon, label: 'Home' },
    { href: '#', icon: Rocket, label: 'Atualizador' },
    { href: '#', icon: History, label: 'Histórico' },
    { href: '#', icon: PiggyBank, label: 'Saque' }
  ]
};

export function Navbottom() {
  return (
    <nav className="fixed bottom-0 z-20 left-0 w-full bg-background border-t border-border">
      <div className="flex justify-center gap-4 items-center">
        {DATA.navbar.map((item, index) => {
          const isHome = item.label === 'Home';
          const base = isHome ? 'text-white' : 'text-blue-400/50';
          const hover = isHome
            ? ''
            : 'group-hover:text-white trasition-all duration-300';

          return (
            <Link key={index} href={item.href} className="p-4 group">
              <div className="flex flex-col justify-center items-center gap-1">
                <item.icon className={`h-5 w-5 ${base} ${hover}`} />
                <span className={`text-sm font-bold ${base} ${hover}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
