import NavbarWrapper from '@/components/HomeComponents/Navbarwrapper';
import { Navbottom } from '@/components/HomeComponents/Navbottom';
import { ThemeProvider } from '@/components/landing/theme-provider';
import { Toaster } from '@/components/ui/toaster';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <ThemeProvider>
      <main
        id="skip"
        className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
      >
        <NavbarWrapper />
        <div className="md:hidden z-40">
          <Navbottom />
        </div>
        {children}
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
