'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

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
import { ProfileButton } from '../HomeComponents/ProfileButton';
import { Card } from '../ui/card';

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
    <div
      className="flex w-full
        touch-pan-x touch-pan-y md:ml-14"
    >
      

      <ScrollArea className="w-full rounded-md border-none flex-1 h-svh">
        <main className="flex flex-1 flex-col bg-white dark:bg-background p-4 md:gap-4">
          <div className="flex flex-col gap-4  bg-white dark:bg-background">
            <div className="flex w-full justify-between items-center pb-2">
              <h1 className="text-xl font-medium text-black dark:text-text">
                Planos e assinatura
              </h1>
              <ProfileButton />
            </div>

            <div className="mx-auto w-full items-start bg-white dark:bg-background ">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 border border-zinc-400 dark:border-zinc-700 rounded-lg bg-white dark:bg-subbackground">
                  <h2 className="pb-1 text-xl font-bold">Email</h2>
                  <div className="text-sm font-sans opacity-80">
                    Seu usuario esta vinculado a este email
                  </div>
                  <form className="py-2">
                    <Input
                      className="text-black dark:text-text bg-white dark:bg-background border border-zinc-500 dark:border-border"
                      placeholder="Email"
                      value={user.email}
                      disabled
                    />
                  </form>
                </Card>
                <Card className="p-4 bg-white border border-zinc-400 dark:border-zinc-700 rounded-lg dark:bg-subbackground">
                  <div className="">
                    <div className="pt-1 text-black dark:text-text">
                      <h2 className="text-xl font-bold text-background dark:text-text">
                        Gerenciar minha assinatura
                      </h2>
                      <p className="font-sans text-sm pt-1 opacity-80">
                        {subscription
                          ? `Voçe assinou o plano ${subscription?.prices?.products?.name}.`
                          : 'Voçe ainda nao assinou nenhum plano.'}
                      </p>
                    </div>
                    <div className=" border-zinc-300 dark:border-border pt-2 flex space-between">
                      <Button
                        className="bg-background font-bold border text-text"
                        onClick={handleBillingPortal}
                        disabled={loading}
                      >
                        Gerenciar meu plano
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Pricing user={user} />
          </div>
        </main>
      </ScrollArea>
    </div>
  );
}
