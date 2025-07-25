'use client';

import { useEffect, useState } from 'react';
import Empty from './Empty';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import CreateProject from './CreateProject';
import { Clock, Filter, Search } from 'lucide-react';
import { RemoveProject } from './RemoveProject';
import { createClient } from '../../utils/supabase/client';
import LoadingAnimation from '../Loading/LoadingAnimation';

const supabase = createClient();

interface Project {
  id: string;
  name: string;
  created_at: string;
  owner: string;
}

export const Download = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    setLoading(false);

    if (error) {
      alert('Erro ao carregar projetos: ' + error.message);
    } else {
      setProjects(data);
    }
  }

  function handleProjectCreated(newProject: Project) {
    setProjects((prev) => [newProject, ...prev]);
  }

  return (
    <section className="flex flex-col bg-white dark:bg-background p-4">
      <div className='pb-4'>
        <h1 className="text-2xl font-medium text-black dark:text-text">
          Projetos
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-2 items-center justify-between pb-2">
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
          className="rounded-lg border border-zinc-300 dark:border-border bg-white dark:bg-subbackground
           hover:bg-white dark:hover:bg-subbackground text-zinc-800 dark:text-text"
        >
          <Filter className="w-4 h-4" />
        </Button>
          <div className="py-3">
        <CreateProject onProjectCreated={handleProjectCreated} />
      </div>
      </div>

    

      <div
        className={`grid gap-4 pt-1 w-full ${
          projects.length === 0
            ? 'grid-cols-1'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {loading && <span></span>}
        {!loading && projects.length === 0 && (
          <div className="flex w-full items-center justify-center h-[400px]">
            <Empty />
          </div>
        )}
        {!loading &&
          projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-subbackground border border-zinc-300 dark:border-border shadow-md"
            >
              <CardContent className="p-4 space-y-1">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-lg font-semibold text-btn">
                    {project.name}
                  </h3>
                  <RemoveProject
                    projectId={project.id}
                    onRemoved={fetchProjects}
                  />
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock size={14} />
                  <span>Criado dia</span>
                  <span>
                    {new Date(project.created_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
};
