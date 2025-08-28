'use client';

export default function Failure() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg text-center">
        <div className="text-red-500 text-6xl mb-4">✗</div>
        <h1 className="text-2xl font-bold mb-2">Pagamento Rejeitado</h1>
        <p className="text-muted-foreground">
          Houve um problema com seu pagamento. Tente novamente.
        </p>
      </div>
    </div>
  );
}
