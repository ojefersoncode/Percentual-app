export default async function PaymentStatus({
  searchParams
}: {
  searchParams: { ref?: string };
}) {
  if (!searchParams?.ref) {
    return <div>Referência de pagamento não fornecida</div>;
  }

  // Verifica status no backend
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/status?ref=${searchParams.ref}`
  );
  const data = await res.json();

  if (data.status === 'approved') {
    return <div>Pagamento aprovado! Redirecionando...</div>;
  }
  if (data.status === 'failed') {
    return <div>Pagamento rejeitado! Redirecionando...</div>;
  }

  return <div>Pagamento pendente...</div>;
}
