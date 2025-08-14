import { CarouselBanner } from '@/components/landing/CarrouselBanner';
import { FAQ } from '../components/landing/FAQ';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Navbar } from '../components/landing/Navbar';
import { createClient } from '../utils/supabase/server';
import Cards from '@/components/HomeComponents/Cards';
import Footer from '@/components/HomeComponents/Footer';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="w-full bg-white dark:bg-background overflow-hidden touch-pan-x touch-pan-y">
        <div className="flex w-full items-center justify-center z-40 fixed">
          <Navbar user={user} />
        </div>

        <div className="mx-6 pt-24">
          <CarouselBanner />
        </div>

        <div className="w-full flex justify-center items-center pt-10 px-6">
          <Cards />
        </div>

        <div className="mx-6">
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
}
