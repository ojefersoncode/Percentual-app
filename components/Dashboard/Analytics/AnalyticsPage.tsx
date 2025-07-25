'use client';

import { OnlineUser } from './OnlineUser';
import { TotalUser } from './TotalUser';

export const AnalyticsPage = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="pb-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        <OnlineUser />
        <TotalUser />
        <OnlineUser />
        <TotalUser />
        <OnlineUser />
        <TotalUser />
      </div>
    </section>
  );
};
