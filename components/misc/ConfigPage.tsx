'use client';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { ModeToggle } from '../landing/mode-toggle';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { Step1 } from '../ConfigPage/Step1';
import { Step2 } from '../ConfigPage/Step2';
import { Step3 } from '../ConfigPage/Step3';
import { Step4 } from '../ConfigPage/Step4';
import { Button } from '../ui/button';

interface ConfigPageProps {
  template: string;
  favicon: string;
  onClose: () => void;
  user: User;
}

const template = 'Template de exemplo';
const favicon = '/favicon.ico';

export default function ConfigPage({ user, onClose }: ConfigPageProps) {
  const [config, setConfig] = useState({
    favicon: favicon || '',
    textPrimary: '#ffffff',
    textSecondary: '#cbd5e1',
    textNeutral: '#94a3b8',
    bgPrimary: '#1e293b',
    bgSecondary: '#334155',
    bgNeutral: '#475569',
    font: 'Inter',
    icons: 'lucide',
    github: false
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedFavicon = localStorage.getItem('favicon');
    if (savedFavicon) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        favicon: savedFavicon
      }));
    }
  }, []);

  const handleCreateProject = () => {
    console.log('Criando projeto com:', config);
    onClose(); // Now the onClose function is correctly passed in
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-white items-center">
      <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-white dark:bg-black">
        <div className="flex gap-1 text-xl font-bold items-center">
          <img className="size-8" src="/logo.webp" alt="logo" />
          <div className="flex">
            <h1 className="text-gray-900 dark:text-gray-100 text-base">
              Cooderfy
            </h1>
          </div>
        </div>

        <div className="flex gap-4">
          <ModeToggle />
          <Navbar />
        </div>
      </nav>

      <div className="dark:bg-black dark:bg-muted/40 p-8 rounded-lg md:w-2/3 shadow-lg flex flex-col space-y-8">
        <h2 className="text-2xl font-semibold text-black dark:text-gray-100">{`Configurar ${template}`}</h2>

        {/* Conteúdo das etapas */}
        <div className="space-y-6">
          {step === 1 && (
            <Step1
              favicon={config.favicon}
              onChangeFavicon={(favicon: string) => {
                localStorage.setItem('favicon', favicon);
                setConfig({ ...config, favicon });
              }}
            />
          )}

          {step === 2 && (
            <Step2
              config={config}
              setConfig={setConfig} // Passando setConfig diretamente
            />
          )}

          {step === 3 && (
            <Step3
              font={config.font}
              icons={config.icons}
              onChangeFont={(font) => setConfig({ ...config, font })}
              onChangeIcons={(icons) => setConfig({ ...config, icons })}
            />
          )}

          {step === 4 && (
            <Step4
              github={config.github}
              onChangeGithub={(checked) =>
                setConfig({ ...config, github: checked })
              }
            />
          )}
        </div>

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              variant={'outline'}
              className="px-4 py-2 transition text-black dark:text-white"
              onClick={prevStep}
            >
              Voltar
            </Button>
          )}

          {step < 4 ? (
            <Button
              variant={'ghost'}
              className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
              onClick={nextStep}
            >
              Próximo
            </Button>
          ) : (
            <button
              className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 transition"
              onClick={handleCreateProject}
            >
              Criar
            </button>
          )}
        </div>
      </div>

      <div className="w-full pt-4">
        <Footer />
      </div>
    </div>
  );
}
