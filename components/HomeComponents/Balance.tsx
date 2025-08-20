'use client';
import BalanceModal from '../WithdrawComponents/BalanceModal';
import { useBalance } from './BalanceContext';

export default function Balance() {
  const { balance } = useBalance();

  return (
    <div className="flex items-center gap-2 justify-center text-text border border-border bg-subbackground rounded-md">
      <span className="font-bold text-md max-md:text-sm pr-1 pl-3">
        R$: {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
      <BalanceModal />
    </div>
  );
}
