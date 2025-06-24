'use client';
import { LogoIcon } from './Icons';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-white dark:bg-background text-black dark:text-gray-100">
      {/* Seção Principal */}
      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        
        {/* Logo */}
        <div className="flex items-center select-none col-span-2 xl:col-span-1">
          <img className="size-10" src="/logo.webp" alt="logo" />
          <a href="/" className="ml-2 font-bold text-xl">
            Cooderfy
          </a>
        </div>

        {/* Grupo de Links */}
        {[
          {
            title: 'Redes Sociais',
            links: ['Github', 'Twitter', 'Linkedin'],
          },
          {
            title: 'Plataformas',
            links: ['Web', 'Mobile'],
          },
          {
            title: 'Sobre',
            links: ['Tecnologias', 'Preços', 'FAQ'],
          },
          {
            title: 'Comunidade',
            links: ['Youtube', 'Discord', 'Whatsapp'],
          },
        ].map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{section.title}</h3>
            <ul className="flex flex-col gap-1 text-sm">
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

      {/* Rodapé Inferior */}
      <section className="container pb-4 text-sm">
        <div className="flex gap-2">
          <span> 
           &copy; 2024,
          </span>
          <a
            href="https://github.com/Ojefersoncode"
            target="_blank"
            rel="noreferrer noopener"
            className=" hover:opacity-80"
          >
            Cooderfy
          </a>
         <span>LLC.</span> 
        </div>
      </section>
    </footer>
  );
};
