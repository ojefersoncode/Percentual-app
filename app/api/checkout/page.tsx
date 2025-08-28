'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentStatus({
  searchParams
}: {
  searchParams: { ref: string };
}) {
  const router = useRouter();
  const [status, setStatus] = useState<'approved' | 'failed' | 'pending'>(
    'pending'
  );

  useEffect(() => {
    async function checkStatus() {
      const res = await fetch(`/api/checkout/status?ref=${searchParams.ref}`);
      const data = await res.json();
      setStatus(data.status);

      if (data.status === 'failed') router.replace('/failure');
      if (data.status === 'approved') router.replace('/success');
    }
    checkStatus();
  }, [searchParams.ref, router]);

  return <div>Verificando status do pagamento...</div>;
}
