'use client';

import Navbar from '@/app/home/partials/navbar';

import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impact-statistics';
import Projects from './home/partials/projects';
import Services from './home/partials/services';
import ServicesProcess from './home/partials/services-process';
import Testimonials from './home/partials/testimonials';
import TrustedBy from './home/partials/trusted-by';
import UseCaseTabs from './home/partials/usecase-tabs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicesProcess />
      <Services />
      <UseCaseTabs />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
