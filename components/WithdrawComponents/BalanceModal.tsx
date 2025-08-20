'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Wallet } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Withdraw from './Withdraw';
import DepositModal from './Depositmodal';

export default function BalanceModal() {
  return (
    <Dialog>
      {/* Botão para abrir o modal */}
      <DialogTrigger asChild>
        <Button className="py-2 px-3 bg-high dark:bg-high hover:bg-high hover:dark:bg-high rounded-md">
          <Wallet className="size-5 text-text dark:text-text" />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0  bg-subbackground dark:bg-subbackground rounded-2xl shadow-lg h-screen">
        <Card className="border-none shadow-none bg-background dark:bg-background">
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
