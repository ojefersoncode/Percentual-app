import HomePage from '../../components/misc/HomePage';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getSubscription, getUser } from '../../utils/supabase/queries';

export default async function Home() {
  const supabase = await createClient();
  const [user, subscription] = await Promise.all([
    getUser(supabase),
    getSubscription(supabase)
  ]);

  if (!user) {
    return redirect('/auth/signin');
  }

  return <HomePage user={user} subscription={subscription} />;
}
