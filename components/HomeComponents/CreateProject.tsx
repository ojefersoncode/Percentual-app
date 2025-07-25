'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CreateProject() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="px-3 py-2 rounded-lg bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text">
            <div className="flex w-full items-center gap-2">
              <span className="text-xs font-sans">Novo projeto</span>
              <Plus className="w-4 h-4" />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-background">
          <DialogHeader>
            <DialogTitle className="flex w-full justify-start mb-4">
              Criar um novo projeto
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 py-4 max-md:py-2">
            <Label htmlFor="name-1">Nome de projeto</Label>
            <Input
              id="name-1"
              name="name"
              className="bg-white dark:bg-subbackground dark:text-text border border-zinc-400 dark:border-zinc-700"
            />
          </div>

          <DialogFooter className="flex flex-col w-full gap-4 mt-4">
            <DialogClose asChild>
              <Button className="bg-white dark:bg-background dark:hover:bg-background dark:text-text border border-zinc-400 dark:border-zinc-700">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              className="px-3 py-2 rounded-lg bg-btn dark:bg-btn hover:bg-btn dark:hover:bg-btn text-text dark:text-text"
              type="submit"
            >
              Criar projeto
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
