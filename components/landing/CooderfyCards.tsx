'use client';

import { cn } from '@/utils/cn';
import { Marquee } from '@/components/magicui/marquee';
import {
  ChartNoAxesCombined,
  MessagesSquare,
  PaintBucket,
  ShieldCheck
} from 'lucide-react';
import { ReactElement } from 'react';

interface FeatureProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PaintBucket className="text-btn size-10" />,
    title: 'Acessibilidade',
    description:
      'Templates fáceis de editar e configurar de acordo com o seu SaaS.'
  },
  {
    icon: <MessagesSquare className="text-btn size-10" />,
    title: 'Comunidade',
    description:
      'Além dos templates, você ainda poderá acessar nossa comunidade privada para networking e tirar dúvidas.'
  },
  {
    icon: <ChartNoAxesCombined className="text-btn size-10" />,
    title: 'Escalabilidade',
    description:
      'Nossos templates são desenvolvidos para que seu produto possa ser facilmente escalado.'
  },
  {
    icon: <ShieldCheck className="text-btn size-10" />,
    title: 'Segurança',
    description:
      'Levamos a segurança muito a sério. Nossos templates seguem as melhores práticas para garantir a proteção dos usuários.'
  }
];

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

const Features = ({ icon, title, description }: FeatureProps) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center gap-2">
          {icon}
          <figcaption className="text-lg font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-4 text-sm">{description}</blockquote>
    </figure>
  );
};

export const CooderfyCards = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <Features key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <Features key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white  dark:from-background"></div>
    </div>
  );
};
