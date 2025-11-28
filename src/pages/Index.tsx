import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Vision } from '@/components/Vision';
import { Expertise } from '@/components/Expertise';
import { Products } from '@/components/Products';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';

import { Clients } from '@/components/Clients';

import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen relative">
        <div className="watermark" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Vision />
          <Expertise />
          <Products />
          <Process />
          <WhyChooseUs />
          <Projects />
          <Clients />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
