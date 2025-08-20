// contexts/BalanceContext.tsx
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '../../utils/supabase/client';

const BalanceContext = createContext<{
  balance: number;
  setBalance: (b: number) => void;
}>({ balance: 0, setBalance: () => {} });

export const BalanceProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [balance, setBalance] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    let subscription: any;

    const fetchBalance = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('users')
        .select('balance')
        .eq('id', user.id)
        .single();

      if (!error) setBalance(Number(data?.balance ?? 0));

      subscription = supabase
        .channel('public:users')
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'users',
            filter: `id=eq.${user.id}`
          },
          (payload) => setBalance(Number(payload.new.balance ?? 0))
        )
        .subscribe();
    };

    fetchBalance();

    return () => {
      if (subscription) supabase.removeChannel(subscription);
    };
  }, [supabase]);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);
