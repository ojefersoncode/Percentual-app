'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Navbar } from '../HomeComponents/NavBar';
import { User } from '@supabase/supabase-js';
import { createClient } from '../../utils/supabase/client';
import { useState } from 'react';
import Image from 'next/image';
import { getURL } from '@/utils/helpers';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { SubscriptionWithPriceAndProduct } from '../../utils/types';
import { Bell } from 'lucide-react';
import { Footer } from '../landing/Footer';
import { Pricing } from '../landing/Pricing';

export default function AccountPage({
  user,
  subscription
}: {
  user: User;
  subscription: SubscriptionWithPriceAndProduct;
}) {
  const supabase = createClient();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBillingPortal = async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke('get_stripe_url', {
      body: {
        return_url: getURL('//planos-e-compras')
      }
    });
    if (error) {
      setLoading(false);
      return toast({
        title: 'Ocorreu um erro',
        description: error.message,
        variant: 'destructive'
      });
    }
    const redirectUrl = data?.redirect_url;
    if (!redirectUrl) {
      setLoading(false);
      return toast({
        title: 'Um erro ocorreu.',
        description:
          'Por favor, tente novamente ou entre em contato com o suporte.',
        variant: 'destructive'
      });
    }
    router.push(redirectUrl);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
    
      <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-4 bg-white dark:bg-background border-b border-zinc-300 dark:border-border">
        <div className="flex gap-1 items-center">
          <img className="size-7" src="/LogoC.png"  alt="logo" />
        </div>
        <div className="flex items-center gap-3">
            <Bell className="size-4" />
            <Navbar />
          </div>
      </nav>

      
      <main className=" flex flex-1 flex-col bg-white dark:bg-background p-4 md:gap-8 md:p-10">
        <div className="flex flex-col gap-4 p-2 bg-white dark:bg-background">
         <div className="mx-auto grid w-full max-w-6xl pt-1 pb-4">
          <h1 className="text-xl font-semibold pt-1">
            Assinatura e compras
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 bg-white dark:bg-background">
          <div className="grid gap-6">
            <div data-chunk="dashboard-04-chunk-1">
              <div>
                <h2 className="pb-2 text-sm font-semibold">Email</h2>
                <div className="text-sm">Seu usuario esta vinculado a este email</div>
                <form className="py-2">
                  <Input 
                    className="text-black dark:text-text bg-white dark:bg-subbackground border border-zinc-500 dark:border-border"
                    placeholder="Email" 
                    value={user.email} 
                    disabled 
                  />
                </form>
              </div>
              <div className="py-2 bg-white dark:bg-background">
                <div data-chunk="dashboard-04-chunk-2">
                  <div className="py-2 text-black dark:text-text">
                    <h2 className="text-xl font-bold">Plano e compras</h2>
                    <p>
                      {subscription
                        ? `Voçe assinou o plano ${subscription?.prices?.products?.name}.`
                        : 'Voçe ainda nao assinou nenhum plano.'}
                    </p>
                  </div>
                  <div className="border-t border-zinc-300 dark:border-border pt-4 flex space-between">
                    <Button onClick={handleBillingPortal} disabled={loading}>
                      Gerenciar meu plano
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
       </div>
         <div className="w-full">
           <Pricing user={user} />
         </div>
      </main>
      <Footer />
    </div>
  );
}
