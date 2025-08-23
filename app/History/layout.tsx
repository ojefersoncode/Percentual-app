import NavbarWrapper from '@/components/HomeComponents/Navbarwrapper';
import { Navbottom } from '@/components/HomeComponents/Navbottom';
import { ThemeProvider } from '@/components/landing/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export default function HistoryLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <main
        id="skip"
        className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
      >
        <div>
          <NavbarWrapper />
        </div>
        <div className="md:hidden z-40">
          <Navbottom />
        </div>

        {children}
      </main>

      <Toaster />
    </ThemeProvider>
  );
}
