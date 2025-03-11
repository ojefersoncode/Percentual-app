import HomePage from '../../components/misc/HomePage';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';

export default async function Home() {
  // Cria o cliente Supabase
  const supabase = await createClient();
  
  // Obtém o usuário atual
  const user = await getUser(supabase);

  // Se o usuário não estiver logado, redireciona para a página de login
  if (!user) {
    return redirect('/auth/signin');
  }

  // Se o usuário estiver logado, renderiza a página inicial
  return <HomePage user={user} />;
}
