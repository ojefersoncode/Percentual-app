export default function Pending() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg text-center">
        <div className="text-yellow-500 text-6xl mb-4">⏳</div>
        <h1 className="text-2xl font-bold mb-2">Pagamento Pendente</h1>
        <p className="text-muted-foreground">
          Seu pagamento está sendo processado. Aguarde a confirmação.
        </p>
      </div>
    </div>
  );
}
