'use client';

import { User } from '@supabase/supabase-js';
import Footer from '../HomeComponents/Footer';
import GiftBox from '../HistoryComponents/GiftsBox';
import { BalanceHistory } from '../HistoryComponents/BalanceHistory';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function HistoryPage({ user }: { user: User }) {
  return (
    <div className="px-4 pt-4 max-md:pb-24">
      <div className="pb-4">
        <Tabs defaultValue="Meuspresentes">
          <TabsList className="bg-subbackground dark:bg-subbackground">
            <TabsTrigger
              className="rounded-sm bg-background dark:bg-subbackground hover:bg-subbackground dark:hover:bg-subbackground text-text dark:text-text"
              value="Meuspresentes"
            >
              Meus Presentes
            </TabsTrigger>
            <TabsTrigger
              className="rounded-sm bg-background dark:bg-subbackground hover:bg-subbackground dark:hover:bg-subbackground text-text dark:text-text"
              value="Trasacoes"
            >
              Trasações
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Meuspresentes">
            <GiftBox />
          </TabsContent>
          <TabsContent value="Trasacoes">
            <BalanceHistory />
          </TabsContent>
        </Tabs>
      </div>

      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
}
