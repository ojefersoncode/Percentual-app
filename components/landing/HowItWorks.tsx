'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, MapPin, Airplay, Gift } from 'lucide-react';  // Importe os ícones corretos de lucide-react

import type { JSX } from 'react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Medal className="text-red-600 size-10" />,  // Aplique a classe de cor aqui
    title: 'Accessibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
  },
  {
    icon: <MapPin className="text-red-600 size-10" />,
    title: 'Community',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
  },
  {
    icon: <Airplay className="text-red-600 size-10" />,
    title: 'Scalability',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
  },
  {
    icon: <Gift className="text-red-600 size-10" />,
    title: 'Gamification',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum'
  }
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-14 sm:py-20">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It <span className="bg-gradient-to-b text-red-600">Works </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
