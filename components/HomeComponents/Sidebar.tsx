'use client';
import {
  House,
  LogOut,
  ChartNoAxesCombined,
  Megaphone,
  HardDrive,
  Settings2,
  BookOpen,
  Bell,
  Code,
  Bug
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../HomeComponents/NavBar';

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="flex flex-col max-sm:h-svh h-dvh items-center justify-between w-12 border-r border-zinc-200 dark:border-zinc-700 dark:bg-subbackground">
      <div className="w-full flex flex-col items-center gap-5 pt-3 text-background/70 dark:text-text ">
        <img className="size-7" src="/LogoC.png" alt="logo" />

        <House onClick={() => router.push('/Home')} className="w-5 h-5" />

        <Code onClick={() => router.push('/componentes')} className="w-5 h-5" />

        <ChartNoAxesCombined
          onClick={() => router.push('/componentes')}
          className="w-5 h-5"
        />

        <Bug onClick={() => router.push('/componentes')} className="w-5 h-5" />

        <HardDrive
          onClick={() => router.push('/componentes')}
          className="w-5 h-5"
        />

        <Megaphone
          onClick={() => router.push('/componentes')}
          className="w-5 h-5"
        />

        <BookOpen
          onClick={() => router.push('/componentes')}
          className="w-5 h-5"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center w-full dark:text-text">
        <div className="mt-4"></div>

        <div className="border-t border-zinc-200 dark:border-zinc-700 py-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
