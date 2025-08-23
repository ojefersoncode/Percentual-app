'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MercadoPagoButtonProps {
  title: string;
  price: number;
  quantity?: number;
  email: string;
}

export default function Callpay({
  title,
  price,
  quantity = 1,
  email
}: MercadoPagoButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/checkout/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          quantity,
          price,
          email
        })
      });

      const data = await response.json();

      if (data.init_point) {
        // Redirecionar para o checkout do Mercado Pago
        window.location.href = data.init_point;
      } else {
        throw new Error('Erro ao criar preferência');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-600 text-white"
    >
      {loading ? 'Processando...' : `Pagar R$ ${price.toFixed(2)}`}
    </Button>
  );
}
