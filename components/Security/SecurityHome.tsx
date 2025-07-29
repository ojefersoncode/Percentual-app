'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Card } from '../../components/ui/card';
import { Button } from '../ui/button';
import { Settings } from 'lucide-react';

export default function SecurityHome() {
  return (
    <div className="flex flex-col p-4 w-full">
      <Card className=" w-full flex-1 space-y-6 bg-white dark:bg-background border-none">
        <div className="flex items-center justify-start gap-4">
          <h1 className="font-bold text-xl text-background dark:text-text">
            Configuração de segurança
          </h1>

          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={'outline'}
                  className="border border-zinc-400 dark:border-zinc-700 bg-white dark:bg-background hover:bg-white dark:hover:bg-background text-background dark:text-text"
                >
                  Ativar segurança
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Seção 1 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-sans text-base text-background dark:text-text mb-2">
              Defesa contra DDoS
            </h1>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Escolher Modo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Manual</SelectItem>
                <SelectItem value="dark">Automatico</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Seção 2 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-sans text-base text-background dark:text-text mb-2">
              Defesa de Api
            </h1>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Escolher Modo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Manual</SelectItem>
                <SelectItem value="dark">Automatico</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Seção 3 */}
        <div className="border bg-gray-100 dark:bg-background rounded-lg p-4">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-sans text-base text-background dark:text-text mb-2">
              Bloqueio de Requisiçoes
            </h1>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Escolher Modo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Manual</SelectItem>
                <SelectItem value="dark">Automatico</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>
    </div>
  );
}
