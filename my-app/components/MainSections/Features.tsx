"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FEATURES } from '@/constants';
import phone from "../../public/images/phone.png";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('features-section');

    const handleScroll = () => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight - 100) {
          setIsVisible(true);
        } else if (sectionTop > windowHeight) {
          setIsVisible(false);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="features-section"
      className={`relative flex-col flexCenter overflow-hidden padding-container md:px-0 pb-8 md:pb-16 shadow-md`}
    >
      <div className={`w-full max-container relative flex justify-end  ${isVisible ? 'animate-show' : 'animate-hide'
        }`}>
        <div className="lg:min-h-[900px] flex flex-1">
          <Image
            src={phone}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="w-full lg:w-[60%] z-20 flex flex-col mb-8 md:mb-16">
          <div className='relative'>
            <h2 className="w-full xl:ml-[4.5rem] bold-32 lg:bold-64 lg:rounded-3xl ">
              Our Features
            </h2>
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
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
  color: string;
};

const FeatureItem = ({ title, icon, description, color }: FeatureItemProps) => {
  return (
    <li className="w-full flex flex-1 flex-col items-start">
      <div className={`rounded-full p-4 lg:p-7`} style={{ backgroundColor: color }}>
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;

