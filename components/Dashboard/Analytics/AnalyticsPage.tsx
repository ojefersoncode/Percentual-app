'use client';

import { Button } from '@/components/ui/button';
import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { StatsUser } from './StatsUser';
import { TotalUser } from './TotalUser';
import { ProfileButton } from '@/components/HomeComponents/ProfileButton';
import { FilterIcon } from 'lucide-react';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex w-full justify-between items-center pb-2">
        <h1 className="text-xl font-medium text-black dark:text-text">
          Projetos
        </h1>
        <Button
          className="bg-white dark:bg-subbackground/80 text-subbackground/60 dark:text-text/80 
        border border-zinc-400 dark:border-zinc-700 px-2 hover:bg-transparent dark:hover:bg-transparent"
        >
          <FilterIcon className="w-5 h-5" />
        </Button>
      </div>

      <div className="pt-1 pb-4">
        <StatsUser />
      </div>

      <div className="grid md:grid-cols-2 items-center gap-4">
        <OnlineUser />
        <TotalUser />
      </div>

      <div className="w-full flex-1 pt-4">
        <TableUser />
      </div>
    </section>
  );
};
