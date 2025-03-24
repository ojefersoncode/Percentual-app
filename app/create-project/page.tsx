import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import ConfigPage from '@/components/misc/ConfigPage';

export default async function createProject() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return (
    <ConfigPage
      user={user}
      template={''}
      favicon={''}
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
}
