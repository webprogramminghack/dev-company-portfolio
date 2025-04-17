'use client';

import Navbar from '@/app/home/partials/navbar';

import ContactForm from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impact-statistics';
import Projects from './home/partials/projects';
import ScrollUp from './home/partials/scroll-up';
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
      <FAQ />
      <ContactForm />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Home;
