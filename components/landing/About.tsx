'use client';

import { Statistics } from '../../components/landing/Statistics';

export const About = () => {
  return (
    <section id="about" className="w-full pt-14 sm:pt-20 px-4">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="max-md:px-6 px-12 flex justify-between max-md:flex-col-reverse max-md:items-center max-md:justify-center md:flex-row gap-8 md:gap-12">
          <img
            src="/landing/rocket.svg"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b text-btn">Sobre </span>a
                cooderfy
              </h2>
              <p className="max-w-md  text-base md:text-xl text-muted-foreground mt-4">
                Uma solução moderna, eficiente e escalável para startups e
                negócios digitais. Com a<strong> Cooderfy</strong>, garantimos a
                segurança da sua aplicação web!
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
