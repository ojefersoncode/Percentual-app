'use client';

import { Plus } from 'lucide-react';
import DepositModal from '../WithdrawComponents/Depositmodal';

export default function Balance() {
  return (
    <div className="flex items-center gap-2 justify-center text-text border border-border bg-subbackground rounded-md">
      <span className="font-bold text-md max-md:text-sm pr-1 pl-3">
        R$:12,000.00
      </span>
      <DepositModal />
    </div>
  );
}
