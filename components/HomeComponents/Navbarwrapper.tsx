'use client';

import Navbar from '@/components/HomeComponents/Navbar';
import { createClient } from '@utils/supabase/client';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

export default function NavbarWrapper() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user) setUser(user);
    };
    fetchUser();
  }, [supabase]);

  if (!user) return null;
  return <Navbar user={user} />;
}
