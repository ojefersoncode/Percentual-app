'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator, Separator } from '@radix-ui/react-dropdown-menu';
import { EllipsisVertical, Trash, Pen, FolderArchive } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function RemoveProject() {
  const router = useRouter();

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
          <DropdownMenuItem onClick={() => router.push('/profile')}>
            <Pen className="w-4 h-4 mr-3" /> Editar
          </DropdownMenuItem>

          <DropdownMenuItem>
            <FolderArchive className="w-4 h-4 mr-3" /> Arquivar
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Trash className="w-4 h-4 mr-3" /> Excluir
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
