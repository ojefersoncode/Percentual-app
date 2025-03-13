'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe',
<<<<<<< HEAD
    comment: 'This landing page is awesome!'
=======
    comment: 'This landing page is awesome! labore et dolore magna aliqua.'
>>>>>>> 1b18d35 (update)
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe1',
    comment:
<<<<<<< HEAD
      'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
=======
      'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua.'
>>>>>>> 1b18d35 (update)
  },

  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe2',
    comment:
<<<<<<< HEAD
      'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
=======
      'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit. '
>>>>>>> 1b18d35 (update)
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe3',
    comment:
<<<<<<< HEAD
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
=======
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
>>>>>>> 1b18d35 (update)
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe4',
    comment:
<<<<<<< HEAD
      'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.'
=======
      'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam.'
>>>>>>> 1b18d35 (update)
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe React',
    userName: '@john_Doe5',
    comment:
<<<<<<< HEAD
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
=======
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
>>>>>>> 1b18d35 (update)
  }
];

export const Testimonials = () => {
  return (
<<<<<<< HEAD
    <section id="testimonials" className="container py-14 sm:py-20">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="text-red-600 bg-clip-text">
          {' '}
          People Love{' '}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
=======
    <section id="testimonials" className="container py-14">
      <h2 className="text-3xl md:text-4xl font-bold">
        Veja alguns de nossos
        <span className="text-red-600 bg-clip-text"> Usuarios </span>
        Estão falando
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Confira agora algumas avaliações de nossos usuarios, estão achando da nossa plataforma.
>>>>>>> 1b18d35 (update)
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
