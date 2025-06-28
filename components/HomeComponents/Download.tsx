'use client';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Clock, GitBranch, Search, Plus, Ellipsis } from 'lucide-react';

const projects = [
  {
    name: 'percentual-app',
    domain: 'cooderfy.com',
    repo: 'ojefersoncode/Percentual-app',
    update: '9m ago',
    file: 'ProfilePage.tsx'
  },
  {
    name: 'voin',
    domain: 'voin-gamma.vercel.app',
    repo: 'ojefersoncode/Voin',
    update: 'Jun 18',
    file: 'tailwind.config.js'
  }
];

export const Download = () => {
  return (
    <section className="flex flex-col h-full bg-white dark:bg-background p-4">

      <div className="flex flex-wrap md:flex-nowrap w-full gap-2 items-center justify-between pb-4">
        <Input
          type="search"
          placeholder="Pesquisar..."
          className="flex-1 min-w-[160px] border border-zinc-300 dark:border-border bg-white dark:bg-subbackground"
        />

        <Button
          size="icon"
          className="rounded-lg bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-subbackground text-black dark:text-text border border-zinc-300 dark:border-border"
        >
          <Search className="w-5 h-5" />
        </Button>

        <Link href="/create-project">
          <Button
            size="icon"
            className="rounded-lg bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="pb-2">
        <h1 className="text-xl font-medium text-black dark:text-text">Projetos</h1>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {projects.map((project, i) => (
          <Card key={i} className="bg-white dark:bg-subbackground border border-zinc-300 dark:border-border shadow-md">
            <CardContent className="p-4 space-y-1">
              <div className="flex w-full justify-between items-center">
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <Ellipsis className="w-4 h-4 text-black dark:text-text" />
              </div>

              <p className="text-sm text-muted-foreground">{project.domain}</p>

              <div className="text-xs flex items-center gap-1 mt-2 text-text/80 dark:text-text/80 bg-btb dark:bg-btn px-2 py-1 rounded-full w-fit">
                <span className="text-gray-800 dark:text-gray-300">{project.repo}</span>
              </div>

              <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                <Clock size={14} />
                <span>Update {project.file}</span>
              </div>

              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <GitBranch size={14} />
                <span>{project.update} on <strong>main</strong></span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
