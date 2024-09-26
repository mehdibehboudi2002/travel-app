"use client";
import Image from 'next/image';
import boat from "../../public/images/boat.png";
import meter from "../../public/images/meter.svg";
import React from 'react';

const Guide = () => {
  return (
    <section className="w-full mt-12 md:mt-24 mb-8 md:mb-16 pb-5 md:pb-8 px-0 xl:px-20 shadow-md ">


      <div className="w-full flexCenter flex-col max-container relative">
        <Image
          src={boat}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center xl:rounded-5xl"
          
        />

        {/* <div className="mt-5 md:mt-0 md:absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={meter}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-550">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div> */}
      </div>

      <div className="flexEnd mt-3 md:mt-8 px-0 md:px-6">
        <div className="w-full rounded-5xl p-8 xl:px-16 xl:py-16 relative overflow-hidden">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize">
           <strong> Guide You </strong> to Easy Path
          </h2>
          <p className="regular-14 xl:regular-16 mt-4">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guide;
