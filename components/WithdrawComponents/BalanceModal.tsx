'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Label } from '../ui/label';
import Withdraw from './Withdraw';
import DepositModal from './Depositmodal';

export default function BalanceModal() {
  const [amount, setAmount] = useState(10);
  const amounts = [20, 50, 100, 200, 500, 1000, 5000, 10000];

  return (
    <Dialog>
      {/* Botão para abrir o modal */}
      <DialogTrigger asChild>
        <Button className="p-2 bg-high dark:bg-high hover:bg-high hover:dark:bg-high rounded-md">
          <Plus className="size-5 text-text dark:text-text" />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0  bg-background dark:bg-background rounded-2xl shadow-lg">
        <Card className="border-none shadow-none">
          <CardContent className="p-6 flex flex-col gap-5 bg-background dark:bg-background border-border">
            <DialogTitle className="sr-only">Depósito</DialogTitle>
            {/* Header */}

            <div className="flex w-full flex-col gap-6">
              <Tabs defaultValue="account">
                <TabsList className="bg-subbackground dark:bg-subbackground">
                  <TabsTrigger
                    className="rounded-sm bg-background dark:bg-subbackground hover:bg-subbackground dark:hover:bg-subbackground text-text dark:text-text"
                    value="deposit"
                  >
                    Depositar
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-sm bg-background dark:bg-subbackground hover:bg-subbackground dark:hover:bg-subbackground text-text dark:text-text"
                    value="withdraw"
                  >
                    Retirar
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="deposit">
                  <DepositModal />
                </TabsContent>
                <TabsContent value="withdraw">
                  <Withdraw />
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
