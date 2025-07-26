'use client';

import { Separator } from '@/components/ui/separator';
import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { TotalUser } from './TotalUser';
import { ProfileButton } from '@/components/HomeComponents/ProfileButton';
import { ScrollBar } from '@/components/ui/scroll-area';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex w-full justify-between items-center pb-2">
        <h1 className="text-xl font-bold text-black dark:text-text">
          Dashboard
        </h1>
        <ProfileButton />
      </div>

      <div className="grid md:grid-cols-2 items-center gap-4">
        <OnlineUser />
        <TotalUser />
      </div>

      <div className="pt-10 pb-2 px-2">
        <h2 className="text-lg font-bold">Tabela de usuario</h2>
      </div>

      <div className="p-1 w-full">
        <TableUser />
      </div>
    </section>
  );
};
