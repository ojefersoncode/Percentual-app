'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Vai ser gratuito?',
    answer:
      'Sim. tera recursos gratuitos e recursos premiun, mas isso não afetará seu uso.',
    value: 'item-1'
  },
  {
    question: 'Vai ter quais templates?',
    answer:
      'Teremos muitos templates, de SaaS, ecommerc, landing page e entre outros',
    value: 'item-2'
  },
  {
    question: 'Ensinam a configurar o projeto?',
    answer:
      'Sim, temos video aulas gravadas e atualizadas para ajudar configurar o seu projeto, tambem temos a nossa comunidade onde poderar tirar suas duvidas.',
    value: 'item-3'
  },
  {
    question: 'Posso monetizar meu SaaS?',
    answer:
      'Sim, você poderá usar o template à vontade para criar quantos SaaS quiser.',
    value: 'item-4'
  },
  {
    question: 'Qual linguagem usada?',
    answer:
      'Nossos templates utilizam tecnologias como Next.js, TypeScript, Supabase, Vercel e Lucide React, podendo integrar ainda mais tecnologias conforme sua necessidade.',
    value: 'item-5'
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="flex flex-col w-full px-4 py-20 max-md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{' '}
        <span className="bg-gradient-to-b text-btn bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem mais perguntas?{' '}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-btn transition-all border-primary hover:text-red-400"
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
