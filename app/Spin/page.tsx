'use client';
import { useState, useEffect } from 'react';
import { Spin } from '@/components/pages/Spin';
import { createClient } from '../../utils/supabase/client';
import { getUser } from '../../utils/supabase/queries';

export default function SpinPageClient() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const supabase = createClient();
    getUser(supabase).then((u) => setUser(u));
  }, []);

  if (!user) return <div>Carregando...</div>;

  return <Spin user={user} />;
}
