'use client';

import { Separator } from '@/components/ui/separator';
import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { TotalUser } from './TotalUser';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="pb-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center gap-6">
        <OnlineUser />
        <TotalUser />
      </div>

      <div className="pb-2 pt-6">
        <Separator />
      </div>

      <div className="pb-4">
        <TableUser />
      </div>
    </section>
  );
};
