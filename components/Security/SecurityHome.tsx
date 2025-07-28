'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card } from '../../components/ui/card';

export default function SecurityHome() {
  return (
    <div className="flex flex-col p-4  mx-auto w-full">
      <Card className=" w-full flex-1 space-y-6 bg-white dark:bg-background border-none">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center justify-between  gap-2">
            <h1 className="font-bold text-xl text-background dark:text-text">
              Configuração de segurança
            </h1>
            <div className="flex items-center">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Ativar defesas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Manual</SelectItem>
                  <SelectItem value="dark">Automatico</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
