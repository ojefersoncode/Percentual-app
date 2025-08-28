'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PaymentStatus() {
  const router = useRouter();
  const searchParams = useSearchParams(); // pega os query params
  const ref = searchParams.get('ref');

  const [status, setStatus] = useState<'approved' | 'failed' | 'pending'>(
    'pending'
  );

  useEffect(() => {
    if (!ref) return;

    async function checkStatus() {
      const res = await fetch(`/api/checkout/status?ref=${ref}`);
      const data = await res.json();
      setStatus(data.status);

      if (data.status === 'failed') router.replace('/failure');
      if (data.status === 'approved') router.replace('/success');
    }

    checkStatus();
  }, [ref, router]);

  return <div>Verificando status do pagamento...</div>;
}
