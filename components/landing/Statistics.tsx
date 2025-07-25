'use client';
export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: '80+',
      description: 'Usuarios'
    },
    {
      quantity: '100+',
      description: 'Lançamentos'
    },
    {
      quantity: '182+',
      description: 'Downloads'
    },
    {
      quantity: '6+',
      description: 'Produtos'
    }
  ];

  return (
    <section id="statistics">
      <div className="p-0 flex flex-wrap gap-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
