'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ProfileButton() {
  const router = useRouter();

 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="py-0 px-1.5 border-none rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent focus:right-0"
        >
          <img
            className="size-8 rounded-full border-2 border-btn"
            src="/User.jpeg"
            alt="logo"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 touch-pan-x touch-pan-y">
        <DropdownMenuGroup className="flex flex-col">
          <DropdownMenuItem onClick={() => router.push('/profile')}>
            <User className="w-5 h-5 mr-2" /> Minha conta
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
 
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
