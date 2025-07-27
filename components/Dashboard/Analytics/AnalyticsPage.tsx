'use client';

import { Button } from '@/components/ui/button';
import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { StatsUser } from './StatsUser';
import { TotalUser } from './TotalUser';
import { ProfileButton } from '@/components/HomeComponents/ProfileButton';
import { Calendar, FilterIcon } from 'lucide-react';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex w-full justify-between items-center pt-2 pb-4">
        <h1 className="text-xl font-medium text-black dark:text-text">
          Projeto 1
        </h1>
        <div className='flex items-center gap-4'>
          <Button
            className="bg-white dark:bg-background text-background/60 dark:text-text/80 
        border border-zinc-400 dark:border-zinc-700 p-4 hover:bg-transparent dark:hover:bg-transparent"
          >
            <Calendar className="size-4" />
          </Button>
          <Button
            className="bg-white dark:bg-background text-background/60 dark:text-text/80 
        border border-zinc-400 dark:border-zinc-700 p-4 hover:bg-transparent dark:hover:bg-transparent"
          >
            <FilterIcon className="size-4" />
          </Button>
        </div>
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
