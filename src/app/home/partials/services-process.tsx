import React from 'react';

import { Section } from '@/components/layouts/section';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/components/ui/phases-accordion';

import { serviceProcessData } from '@/constants/services-process-data';

const ServicesProcess = () => {
  return (
    <Section
      title='How We Work'
      subtitle='A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs'
      id='services-process'
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};

export default ServicesProcess;
