'use client';

import Navbar from '@/app/home/partials/navbar';

import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impact-statistics';
import ServicesProcess from './home/partials/services-process';
import TrustedBy from './home/partials/trusted-by';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicesProcess />
    </div>
  );
};

export default Home;
