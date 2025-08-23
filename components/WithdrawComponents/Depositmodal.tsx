'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { createClient } from '@utils/supabase/client';
import { User } from '@supabase/supabase-js';
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

export default function DepositModal({ user }: { user: User }) {
  const [amount, setAmount] = useState(20);
  const [loading, setLoading] = useState(false);
  const amounts = [5, 10, 20, 50, 100, 200, 500, 1000];
  const [email, setEmail] = useState(''); // <-- declare o estado

  const supabase = createClient();

  // Pega o usuário logado no Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user?.email) setEmail(user.email);
    };
    fetchUser();
  }, [supabase]);
  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Depósito',
          price: amount,
          quantity: 1,
          email
        })
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point; // Redireciona para checkout
      } else {
        throw new Error('Erro ao criar preferência');
      }
    } catch (err) {
      console.error('Erro:', err);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-6 flex flex-col gap-5 bg-background dark:bg-background border-border">
        {/* Payment Method */}
        <div className="flex items-center bg-subbackground dark:bg-subbackground justify-between bg-muted px-3 py-2 rounded-md">
          <span className="text-text font-bold">Pix</span>
          <Select>
            <SelectTrigger className="w-[120px] bg-subbackground border-border">
              <SelectValue placeholder="Alterar" />
            </SelectTrigger>
            <SelectContent className="bg-subbackground dark:bg-subbackground border-border">
              <SelectGroup>
                <SelectItem
                  className="focus:bg-background dark:focus:bg-background"
                  value="pix1"
                >
                  <img
                    src="/pix.webp"
                    alt="logo"
                    className="size-8 object-contain"
                  />
                </SelectItem>
                <SelectItem
                  className="focus:bg-background dark:focus:bg-background"
                  value="pix2"
                >
                  <img
                    src="/pix.webp"
                    alt="logo"
                    className="size-8 object-contain"
                  />
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Deposit Amount */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            VALOR DO DEPOSITO
          </p>
          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center border rounded-md bg-subbackground dark:bg-subbackground px-2 flex-1">
              <span className="font-semibold text-high">R$:</span>
              <Input
                type="number"
                value={amount}
                min={5}
                onChange={(e) => setAmount(Math.max(5, Number(e.target.value)))}
                className="border-none flex-1 font-semibold text-text focus-visible:ring-0 w-full bg-subbackground dark:bg-subbackground "
              />
            </div>
          </div>
        </div>

        {/* Quick Select Amounts */}
        <ToggleGroup
          type="single"
          value={String(amount)}
          onValueChange={(val) => setAmount(Number(val))}
          className="grid grid-cols-2 gap-2 text-text"
        >
          {amounts.map((a) => (
            <ToggleGroupItem
              key={a}
              value={String(a)}
              className={`rounded-md border py-2 ${
                amount === a
                  ? 'data-[state=on]:bg-high dark:data-[state=on]:bg-high data-[state=on]:text-text text-text dark:text-white'
                  : 'dark:bg-subbackground hover:bg-subbackground/60 dark:hover:bg-subbackground/60'
              }`}
            >
              R$:{a.toFixed(2)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {/* Buttons */}
        <Button
          onClick={handlePayment}
          disabled={loading}
          className="bg-btn hover:bg-btn/80 dark:bg-btn dark:hover:bg-btn/80 transition-all text-text dark:text-text  w-full"
        >
          {loading ? 'Processando...' : `Depositar R$:${amount.toFixed(2)}`}
        </Button>

        <Button
          variant="outline"
          className="w-full border-border text-text hover:text-text bg-subbackground dark:bg-subbackground hover:bg-subbackground/60 dark:hover:bg-subbackground/60 transition-all"
        >
          Cancelar
        </Button>
      </CardContent>
    </Card>
  );
}
function setEmail(email: string) {
  throw new Error('Function not implemented.');
}
