import { FEATURES } from '@/constants';
import Image from 'next/image';
import phone from "../public/images/phone.png";
import React from 'react';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat pb-10 md:pt-10 md:pb-20 shadow-md">
      <div className="max-container relative w-full flex justify-end">
        <div className="lg:min-h-[900px] flex flex-1">
          <Image
            src={phone}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="w-full lg:w-[60%] z-20 flex flex-col">
          <div className='relative'>

            <h2 className="w-full p-2 bold-32 lg:bold-64 lg:rounded-3xl bg-gradient-to-r from-green-200 to-purple-200">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 padding-container">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                color={feature.variant}
              />
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  color: string;
}

const FeatureItem = ({ title, icon, description, color }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full p-4 lg:p-7`} style={{backgroundColor: color}}>
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features;