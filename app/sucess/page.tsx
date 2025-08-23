export default function Success() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-2">Pagamento Aprovado!</h1>
        <p className="text-muted-foreground">
          Seu pagamento foi processado com sucesso.
        </p>
      </div>
    </div>
  );
}
