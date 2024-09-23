"use client";
import Image from "next/image";
import campIcon from "../../public/images/camp.svg";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import PlayIcon from "@/public/images/play";


const Hero = () => {

  const [heroAnimate, setHeroAnimate] = useState<boolean>(false);

  useEffect(() => {
    setHeroAnimate(true);
  }, [])

  return (
    <section className={`padding-container mt-1 md:mt-5 mb-10 pt-10 pb-32`}>
      <div className="hero-map"></div>

      <div className={`flex flex-col items-center sm:items-start gap-10 transition-all duration-1000 ${heroAnimate ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="w-full xl:w-1/2 relative z-20 flex flex-1 flex-col">
          <div className="w-full flex flex-col">
            <Image
              src={campIcon}
              alt="camp"
              className="size-9 lg:size-[50px]"
            />
            {/* <h1 className="bold-32 lg:bold-64 -mt-2 lg:-mt-5">Putuk Truno Camp Area</h1> */}
            <h1 className="bold-20 lg:bold-52 -mt-2 lg:-mt-[.85rem]">Where Do You Wanna Go? <br /> Find Your Favotite Camp</h1>
          </div>

          <p className="xl:max-w-[520px] mt-6 regular-16 text-gray-30">
            We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
            Whether you're climbing mountains, crossing rivers, or exploring hidden trails, our app is designed to provide you with the tools you need.
            With our advanced offline maps and real-time navigation features, you can explore safely and confidently, no matter where your adventure takes you.
            Each trip is an opportunity to discover new landscapes and challenge your boundaries, and we're here to make sure you're always prepared.
            Join us on a journey where every step brings new memories, and every destination leaves a lasting impression.
            Let Hilink be your companion as you explore the untamed beauty of the world, wherever your passion for adventure takes you.
          </p>


          {/* <div className="mt-11 flex flex-wrap gap-5">
            <div className="flex gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src={startIcon}
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              198k
              <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
            </p>
          </div> */}

          <div className="w-full sm:w-1/2 md:w-full mt-11 flex flex-col sm:flex-row gap-3">
            <Button type="button" color="green" title="Download App" />
            <Button type="button" color="white" title="How We Work?" icon={<PlayIcon />} href={'/about-Hilink'} />
          </div>


        </div>

        {/* <div className="flex relative">
          <div className="w-[248px] sm:w-[268px] relative z-20 flex flex-col gap-8 rounded-3xl bg-green-890 py-6 px-4 sm:py-8 sm:px-6">

            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="text-gray-20">Location</p>
                <Image className="size-5 sm:size-6 cursor-pointer" src={closeIcon} alt="close" />
              </div>
              <p className="bold-16 sm:bold-20 text-white">Aguas Calientes</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="block text-gray-20">Distance</p>
                <p className="bold-16 sm:bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="block text-gray-20">Elevation</p>
                <p className="bold-16 sm:bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero;