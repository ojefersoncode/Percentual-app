import { Navbottom } from '@/components/HomeComponents/Navbottom';
import { Sidebar } from '@/components/HomeComponents/Sidebar';
import { ThemeProvider } from '@/components/landing/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export default function ProfileLayout({
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
        <div className="flex items-center w-full md:hidden">
          <Navbottom />
        </div>

        {children}
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
