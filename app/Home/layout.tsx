import Navbar from '@/components/HomeComponents/Navbar';
import { Navbottom } from '@/components/HomeComponents/Navbottom';
import { ThemeProvider } from '@/components/landing/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { User } from '@supabase/supabase-js';

interface HomeLayoutProps {
  children: React.ReactNode;
  user: User;
}

export default function HomeLayout({ children, user }: HomeLayoutProps) {
  return (
    <ThemeProvider>
      <main
        id="skip"
        className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
      >
        <div>
          <Navbar user={user} />
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
