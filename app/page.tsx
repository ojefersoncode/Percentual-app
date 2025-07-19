import HeroLeads from '@/components/landing/HeroLeads';
import { About } from '../components/landing/About';
import { FAQ } from '../components/landing/FAQ';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { Pricing } from '../components/landing/Pricing';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { Sponsors } from '../components/landing/Sponsors';
import { Testimonials } from '../components/landing/Testimonials';
import { createClient } from '../utils/supabase/server';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="w-full bg-white dark:bg-background overflow-hidden touch-pan-x touch-pan-y">
        <div className="flex w-full items-center justify-center p-4 max-md:p-2 z-40 fixed">
          <Navbar user={user} />
        </div>
        <div className="pt-20">
          <HeroLeads />
        </div>
        <FAQ />
        {/* <Hero />
        <HowItWorks />
        <Testimonials />
        <Pricing user={user} />
      */}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
