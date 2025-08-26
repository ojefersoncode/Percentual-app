'use client';

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col h-screen w-full justify-center gap-60 items-center">
      <div className="pt-10">
        <img
          src="/Magicbox.png"
          alt="logo"
          className="h-8 max-md:h-6 object-contain"
        />
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-brand animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-brand animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-brand animate-bounce [animation-delay:.7s]"></div>
        </div>
        <span className="text-lg max-md:text-sm text-text dark:text-text font-bold pt-2">
          Caregando
        </span>
      </div>
    </div>
  );
}
