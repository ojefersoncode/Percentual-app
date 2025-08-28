'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type PaymentStatusType = 'approved' | 'failed' | 'pending';

interface StatusPageProps {
  searchParams?: { ref?: string };
}

export default function PaymentStatus({ searchParams }: StatusPageProps) {
  const router = useRouter();
  const [status, setStatus] = useState<PaymentStatusType>('pending');

  useEffect(() => {
    const ref = searchParams?.ref;
    if (!ref) return; // garante que existe referência

    async function checkStatus() {
      try {
        const res = await fetch(`/api/checkout/status?ref=${ref}`);
        const data = await res.json();

        const paymentStatus = data.status as PaymentStatusType;
        setStatus(paymentStatus);

        if (paymentStatus === 'failed') router.replace('/failure');
        else if (paymentStatus === 'approved') router.replace('/success');
      } catch (err) {
        console.error('Erro ao verificar status do pagamento:', err);
      }
    }

    checkStatus();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-white">
      <p className="text-xl">Verificando status do pagamento...</p>
    </div>
  );
}
