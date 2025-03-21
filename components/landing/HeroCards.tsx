'use client';

export const HeroCards = () => {
  return (
    <div className="lg:flex flex-row flex-wrap gap-8 w-full h-auto max-md:my-16">
      <div className="flex justify-center items-center md:pb-36">
        <img
          src="/COODERFY.png"
          alt="Cooderfy"
          className="absolute w-1/2 pr-20 max-md:w-full max-md:px-6 rounded-lg drop-shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
