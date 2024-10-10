"use client";
import Image from 'next/image';
import boat from "../../public/images/boat.png";
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
