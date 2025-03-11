'use client';

export const HeroCards = () => {
  return (
    <div className="lg:flex flex-row flex-wrap gap-8 w-full h-auto max-md:mt-28 max-md:mb-28">
      {/* Team */}
      <div
        className="top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl
       shadow-black/10 dark:shadow-white/10"
      >
        <div className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-32 left-52 rounded-lg w-full h-auto aspect-square object-cover"
          />
        </div>

      </div>
    </div>
  );
};
