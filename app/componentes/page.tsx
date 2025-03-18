import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import Cursos from '@/components/misc/Cursos';
import Componentes from '@/components/misc/Componentes';

export default async function componentes() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <Componentes user={user} />;
}