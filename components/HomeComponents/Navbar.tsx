'use client';
import { Box } from 'lucide-react';
import { Card } from '../ui/card';
import Balance from './Balance';
import { AuthButton } from './AuthButtom';
import { ProfileButton } from './ProfileButton';

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 rounded-lg border border-border">
      <div className="flex items-center gap-0;5">
        <h1 className="text-xl text-white max-md:text-lg font-black">Magic</h1>
        <Box className="size-7 max-md:size-6 text-border" />
        <h1 className="text-xl text-white font-black">box</h1>
      </div>

      <div className="bg-transparent border-none text-white max-md:hidden">
        <div className="flex gap-6 items-center text-border text-base font-semibold ">
          <span className="text-white hover:text-white transition-all duration-300">
            Caixas
          </span>
          <span className="hover:text-white transition-all duration-300">
            Atualizador
          </span>
          <span className="hover:text-white transition-all duration-300">
            Saque
          </span>
          <span className="hover:text-white transition-all duration-300">
            Historico
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden">
          <Balance />
        </div>
        <div>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}
