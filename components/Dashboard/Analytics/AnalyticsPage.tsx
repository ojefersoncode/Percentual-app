'use client';

import { TableUser } from '../Tables/TableUser';
import { OnlineUser } from './OnlineUser';
import { StatsUser } from './StatsUser';
import { TotalUser } from './TotalUser';
import { ProfileButton } from '@/components/HomeComponents/ProfileButton';


export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex w-full justify-between items-center pb-4">
        <h1 className="text-xl font-bold text-black dark:text-text">
          Dashboard
        </h1>
        <ProfileButton />
      </div>

      <div className='pb-4'>
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
