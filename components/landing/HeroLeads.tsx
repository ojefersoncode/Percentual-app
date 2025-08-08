'use client';
import { cn } from '@/utils/cn';
import { DotPattern } from '@/components/magicui/dot-pattern';
import Actionleads from './Actionleads';

export default function HeroLeads() {
  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />

      <section
        className="flex flex-col w-full items-center justify-center gap-6 
    bg-white dark:bg-background"
      >
        <div className="flex flex-col justify-center items-center space-y-4">
          <main className="flex justify-center text-center w-full text-3xl md:text-6xl font-bold">
            <span className="w-full text-background dark:text-text/90">
              Invista em startups
              <h2 className="text-btn"> a partir de R$100. </h2>
            </span>
          </main>

          <p className="text-center max-w-lg md:text-xl max-md:text-sm max-md:max-w-xs font-semibold text-background/80 dark:text-text/80">
            Torne-se sócio de negócios promissores com investimento a partir de
            R$100.
          </p>

          <div className="flex justify-center items-center">
            <Actionleads />
          </div>
        </div>
      </section>
    </div>
  );
}
