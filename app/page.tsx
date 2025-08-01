import HeroLeads from '@/components/landing/HeroLeads';
import { FAQ } from '../components/landing/FAQ';
import { Footer } from '../components/landing/Footer';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { createClient } from '../utils/supabase/server';

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
        <div className="pt-24">
          <HeroLeads />
        </div>
        <div className="mx-6">
          <HowItWorks />
        </div>
        <div className="mx-6">
          <FAQ />
        </div>

        <div className="mx-6">
          <Newsletter />
        </div>

        <Footer />
      </div>
    </>
  );
}
