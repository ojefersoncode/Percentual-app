'use client';
import { LogoIcon } from './Icons';
import { ModeToggle } from './mode-toggle';

export const Footer = () => {
  const sections = [
    {
      links: ['Suporte', 'Componentes', 'Documentação'],
    },
    {
      links: ['Next js', 'React js', 'Supabase'],
    },
  ]; 

  return (
    <footer id="footer" className="bg-white dark:bg-background text-black dark:text-gray-100 border-t border-zinc-300 dark:border-border">

     <div className="flex w-full justify-between items-center p-4">
       <a
          href="/"
          className="flex items-center select-none">
          <img className="size-7" src="/LogoC.png" alt="logo" />
        </a>
      <ModeToggle />
      </div>

      <section className="flex items-center p-4 grid grid-cols-2 justify-between gap-y-4">
        {sections.map((section, index) => (
          <div key={`section-${index}`} className="flex flex-col gap-2">
            <ul className="flex flex-col gap-1 font-mono text-sm">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                    rel="noreferrer noopener"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="p-4 font-mono opacity-70 text-xs">
        <div className="flex gap-1">
          <span>&copy; 2024,</span>
          <a
            href="https://github.com/Ojefersoncode"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:opacity-80"
          >
            Cooderfy
          </a>
          <span>LLC.</span>
        </div>
      </section>
    </footer>
  );
};
