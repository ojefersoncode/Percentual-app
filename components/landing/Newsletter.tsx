'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Subscribed!');
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-14 sm:py-20">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Entre para nossa{' '}
          <span className="bg-gradient-to-b text-red-600">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Receba as melhores novidades e atualizações direto no seu email.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="ojefersoncode@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Inscrever</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
