'use client';

import { User } from '@supabase/supabase-js';
import Cards from '../HomeComponents/Cards';

export default function Withdraw({ user }: { user: User }) {
  return (
    <div>
      <Cards />
    </div>
  );
}
