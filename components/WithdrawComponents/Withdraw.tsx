'use client';

import { useState } from 'react';
import { DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';

export default function Withdraw() {
  const [amount, setAmount] = useState(20);
  const amounts = [20, 50, 100, 200, 500, 1000, 5000, 10000];

  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-6 flex flex-col gap-5 bg-background dark:bg-background border-border">
        <DialogTitle className="sr-only">Depósito</DialogTitle>

        {/* Payment Method */}
        <div className="flex items-center bg-subbackground dark:bg-subbackground justify-between bg-muted px-3 py-2 rounded-md">
          <span className="text-text font-bold">Pix</span>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Alterar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  className="focus:bg-background dark:focus:bg-background"
                  value="grapes"
                >
                  CPF
                </SelectItem>
                <SelectItem
                  className="focus:bg-background dark:focus:bg-background"
                  value="apple"
                >
                  Email
                </SelectItem>
                <SelectItem
                  className="focus:bg-background dark:focus:bg-background"
                  value="blueberry"
                >
                  Telefone
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Deposit Amount */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            VALOR DA RETIRADA
          </p>
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center border rounded-md bg-subbackground dark:bg-subbackground px-2 flex-1">
              <span className="font-semibold text-high">R$:</span>
              <Input
                type="number"
                value={amount}
                min={20} // trava no input
                onChange={(e) =>
                  setAmount(Math.max(20, Number(e.target.value)))
                }
                className="border-none flex-1 font-semibold text-text focus-visible:ring-0 w-full bg-subbackground dark:bg-subbackground "
              />
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                className="bg-subbackground dark:bg-subbackground text-text hover:text-tex dark:text-text dark:hover:text-text hover:bg-subbackground/60 dark:hover:bg-subbackground/60"
                size="icon"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </Button>
              <Button
                className="bg-subbackground dark:bg-subbackground text-text hover:text-tex dark:text-text dark:hover:text-text hover:bg-subbackground/60 dark:hover:bg-subbackground/60"
                size="icon"
                onClick={() => setAmount(Math.max(20, amount - 1))}
              >
                -
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Select Amounts */}
        <ToggleGroup
          type="single"
          value={String(amount)}
          onValueChange={(val) => setAmount(Number(val))}
          className="grid grid-cols-2 gap-2"
        >
          {amounts.map((a) => (
            <ToggleGroupItem
              key={a}
              value={String(a)}
              className={`rounded-md border py-2 ${
                amount === a
                  ? 'data-[state=on]:bg-high dark:data-[state=on]:bg-high text-white'
                  : 'dark:bg-subbackground hover:bg-subbackground/60 dark:hover:bg-subbackground/60'
              }`}
            >
              R$:{a.toFixed(2)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {/* Buttons */}
        <Button className="bg-btn hover:bg-btn/80 dark:bg-btn dark:hover:bg-btn/80 transition-all text-text dark:text-text w-full">
          Retirar R$:{amount.toFixed(2)}
        </Button>
        <Button
          variant="outline"
          className="w-ful bg-subbackground dark:bg-subbackground hover:bg-subbackground/60 dark:hover:bg-subbackground/60"
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
}
