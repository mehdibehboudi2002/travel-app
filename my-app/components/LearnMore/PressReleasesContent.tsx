"use client";
import { RELEASES } from '@/constants';
import React, { useEffect, useState } from 'react';

const PressReleasesContent = () => {

  const [onLoadPageAnimate, setOnLoadPageAnimate] = useState<boolean>(false);

    useEffect(() => {
      setOnLoadPageAnimate(true);
    }, [])

  return (
    <>
      <section className={`padding-container my-5 md:my-10 transition-all duration-1000 ${onLoadPageAnimate ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-10'}`}>

        <h1 className="bold-32 lg:bold-52">
          {
            RELEASES.title
          }
        </h1>

        {
          RELEASES.sections.map((item , index) => (
            <div key={index} className='w-fit flex flex-col my-10'>
              <p className='text-lg font-bold'>
                {item.title}
              </p>

              <p className='text-gray-30 text-sm'>
                {item.date}
              </p>
            </div>
          ))
        }
      </section>
    </>
  );
};

export default PressReleasesContent;
