import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import ProfilePage from '../../components/pages/ProfilePage';
import { Spin } from '@/components/pages/Spin';

export default async function SpinPage() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <Spin user={user} />;
}
