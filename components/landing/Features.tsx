'use client';
import { Badge } from '../../components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../components/ui/card';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/landing/looking-ahead.png'
  },
  {
    title: 'Intuitive user interface',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/landing/reflecting.png'
  },
  {
    title: 'AI-Powered insights',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: '/landing/growth.png'
  }
];

const featureList: string[] = [
  'Dark/Light theme',
  'Reviews',
  'Features',
  'Pricing',
  'Contact form',
  'Our team',
  'Responsive design',
  'Newsletter',
  'Minimalist'
];

export const Features = () => {
  return (
    <section id="features" className="container py-14 sm:py-20 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{' '}
        <span className="bg-gradient-to-b text-red-600">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
