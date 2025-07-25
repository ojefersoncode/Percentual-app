'use client';

import { Separator } from '@/components/ui/separator';
import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { TotalUser } from './TotalUser';
import { ProfileButton } from '@/components/HomeComponents/ProfileButton';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex w-full justify-between items-center pb-2">
        <h1 className="text-xl font-medium text-black dark:text-text">
          Dashboard
        </h1>
        <ProfileButton />
      </div>

      <div className="grid md:grid-cols-2 items-center gap-4">
        <OnlineUser />
        <TotalUser />
      </div>

      <div className="pt-7">
        <h1 className="text-lg font-medium">Tabela de usuario</h1>
      </div>

      <div className="pb-2">
        <TableUser />
      </div>
    </section>
  );
};
