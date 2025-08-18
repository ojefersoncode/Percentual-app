'use client';

import React, { useEffect, useState } from 'react';
import BalanceModal from '../WithdrawComponents/BalanceModal';
import { createClient } from '../../utils/supabase/client';

export default function Balance() {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // pega o usuário logado
        const {
          data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
          console.warn('Usuário não logado');
          setLoading(false);
          return;
        }

        // busca o balance no Supabase
        const { data, error } = await supabase
          .from('users')
          .select('balance')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Erro ao buscar saldo:', error);
        } else {
          console.log('user', user);
          console.log('supabase query result', data, error);

          setBalance(Number(data?.balance ?? 0));
        }
      } catch (err) {
        console.error('Erro inesperado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 justify-center text-text border border-border bg-subbackground rounded-md">
        Carregando...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 justify-center text-text border border-border bg-subbackground rounded-md">
      <span className="font-bold text-md max-md:text-sm pr-1 pl-3">
        R$: {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
      <BalanceModal />
    </div>
  );
}
