'use client';
import BalanceModal from '../WithdrawComponents/BalanceModal';
import { useBalance } from './BalanceContext';
import { User } from '@supabase/supabase-js';

export default function Balance({ user }: { user: User }) {
  const { balance } = useBalance();

  return (
    <div className="flex items-center gap-2 md:py-1 justify-center text-text border border-border bg-subbackground rounded-md">
      <span className="font-bold text-md max-md:text-xs pr-1 pl-3">
        R$: {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
      <BalanceModal user={user} />
    </div>
  );
}
