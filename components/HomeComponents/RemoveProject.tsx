'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical, Trash, Pen, FolderArchive } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
const supabase = createClient();

type RemoveProjectProps = {
  projectId: string;
  onRemoved: () => Promise<void>;
};

export function RemoveProject({ projectId, onRemoved }: RemoveProjectProps) {


  async function handleDelete() {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId);

    if (error) {
      alert('Erro ao excluir projeto: ' + error.message);
    } else {
      onRemoved();
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="py-0 px-1.5 border-none rounded-full bg-transparent dark:bg-transparent 
          hover:bg-transparent dark:hover:bg-transparent focus:right-0"
        >
          <EllipsisVertical className="w-4 h-4 text-black dark:text-text" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 touch-pan-x touch-pan-y">
        <DropdownMenuGroup className="flex flex-col gap-2">
          <DropdownMenuItem>
            <Pen className="w-4 h-4 mr-3" /> Editar
          </DropdownMenuItem>

          <DropdownMenuItem>
            <FolderArchive className="w-4 h-4 mr-3" /> Arquivar
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleDelete}>
            <Trash className="w-4 h-4 mr-3" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}