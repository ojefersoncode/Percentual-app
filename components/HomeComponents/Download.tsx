'use client';
import Empty from './Empty';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import CreateProject from './CreateProject';
import { Clock, Search, EllipsisVertical, ListFilter } from 'lucide-react';
import { RemoveProject } from './RemoveProject';

const projects = [
  {
    name: 'Percentual',
    update: '9 de agosto'
  },
  {
    name: 'Voin',
    update: '18 de junho'
  },
  {
    name: 'Fatech',
    update: '28 de junho'
  }
];

export const Download = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className="flex flex-wrap md:flex-nowrap w-full gap-2 items-center justify-between pb-4">
        <div className="flex flex-1 items-center rounded-lg bg-white dark:bg-subbackground border border-zinc-300 dark:border-border">
          <Input
            type="search"
            placeholder="Pesquisar..."
            className="flex-1 min-w-[160px] text-black dark:text-text border-none bg-white dark:bg-subbackground"
          />
          <Button
            size="icon"
            className="rounded-l-none rounded-lg-r bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-subbackground text-zinc-700 dark:text-text border-l border-zinc-300 dark:border-border"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <Button
          size="icon"
          className="rounded-lg border border-zinc-300 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-subbackground text-zinc-800 dark:text-text"
        >
          <ListFilter className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex w-full items-center justify-between py-2">
        <h1 className="text-2xl font-medium text-black dark:text-text">
          Projetos
        </h1>
        <CreateProject />
      </div>

      <div className="flex flex-col gap-4 pt-1 w-full grid md:grid-cols-2">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="bg-white dark:bg-subbackground border border-zinc-300 dark:border-border shadow-md"
          >
            <CardContent className="p-4 space-y-1">
              <div className="flex w-full justify-between items-center">
                <h3 className="text-lg font-semibold text-btn">
                  {project.name}
                </h3>
                <RemoveProject />
              </div>

              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock size={14} />
                <span>Criado dia</span>
                <span> {project.update}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="hidden">
        <Empty />
      </div>
    </section>
  );
};
