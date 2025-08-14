'use client';

import { Landmark } from 'lucide-react';

export default function Balance() {
  return (
    <div className="flex items-center gap-2 justify-center text-red-100 bg-subbackground p-2 rounded-lg">
      <Landmark className="size-5" />
      <span className="font-semibold text-md max-md:text-sm">R$:12,000.00</span>
    </div>
  );
}
