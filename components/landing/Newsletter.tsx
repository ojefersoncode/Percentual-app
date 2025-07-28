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
      <div className="container">
        <div className="pb-20">
          <div className="">
            <h3 className="text-center text-4xl md:text-5xl font-bold">
              Entre para nossa <span className="text-btn">Newsletter</span>
            </h3>
            <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
              Cadastre-se para receber atualizações e novidades atraves do seu
              email.
            </p>

            <form
              className="flex flex-col justify-center items-center w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="ojefersoncode@gmail.com"
                className="border border-zinc-300 dark:text-text dark:border-zinc-700 rounded-lg bg-white dark:bg-background"
                aria-label="email"
              />
              <Button className="w-full rounded-lg">Inscrever</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
