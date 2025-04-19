import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { tabsData } from '@/constants/tabs-data';

const UseCaseTabs = () => {
  return (
    <Section
      title='Tailored IT Solutions for Every Industry'
      subtitle='From finance to healthcare and retail, we provide cutting-edge technology solutions to drive efficiency, security, and growth in your industry'
    >
      <Tabs defaultValue={tabsData[0].key} orientation='horizontal'>
        <TabsList>
          {tabsData.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab) => {
          const { key, ...contentProps } = tab;

          return (
            <TabsContent key={key} value={key}>
              <Content {...contentProps} />
            </TabsContent>
          );
        })}
      </Tabs>
    </Section>
  );
};

export default UseCaseTabs;

type ContentProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

const Content: React.FC<ContentProps> = ({ title, description, imageSrc }) => {
  return (
    <div className='flex-between mx-auto max-w-232.5 flex-wrap gap-5 pt-6 md:gap-25 md:pt-17'>
      <div className='flex-[7.4] basis-75'>
        <h3 className='display-xs-bold md:display-xl-bold text-neutral-25'>
          {title}
        </h3>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400 md:mt-4'>
          {description}
        </p>
        <Button asChild className='mt-6 w-full px-19.5 md:mt-12 md:w-fit'>
          <Link href='#'>Detail</Link>
        </Button>
      </div>
      <Image
        src={imageSrc}
        alt={title}
        className='aspect-square flex-[2.6] basis-75 rounded-2xl object-cover'
      />
    </div>
  );
};
