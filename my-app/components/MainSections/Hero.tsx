"use client";
import Image from "next/image";
import campIcon from "../../public/images/camp.svg";
import PlayIcon from "@/public/images/play";
import starIcon from "@/public/images/star.svg";
import closeIcon from "@/public/images/close.svg";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

type HeroProps = {
  isCampDetailsPage?: boolean;
  campName?: string;
  countOfReviews?: string;
  qualityOfReviews?: string;
  hasDescription?: boolean;
  description?: string;
  hasButton?: boolean;
}


const Hero = ({ isCampDetailsPage, countOfReviews, qualityOfReviews, campName, hasDescription, description, hasButton }: HeroProps) => {

  const [heroAnimate, setHeroAnimate] = useState<boolean>(false);

  useEffect(() => {
    setHeroAnimate(true);
  }, [])

  return (
    <section className={`padding-container mt-1 md:mt-5 ${isCampDetailsPage ? 'mb-40 xs:mb-52 2xs:mb-64 sm:mb-72 xl:mb-36' : 'mb-10 xs:mb-28 2xs:mb-40 sm:mb-80 xl:mb-36'} pt-10 pb-32`}>
      <div className="hero-map"></div>

      <div className={`flex flex-col items-center xs:items-start gap-10 transition-all duration-1000 ${heroAnimate ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="w-full xl:w-1/2 relative z-20 flex flex-1 flex-col">
          <div className="w-full flex flex-col">
            <Image
              src={campIcon}
              alt="camp"
              className="size-9 lg:size-[50px]"
            />
            {isCampDetailsPage ? <h1 className="bold-32 lg:bold-64 -mt-2 lg:-mt-5"> {campName} </h1>
              : <h1 className="bold-20 lg:bold-52 -mt-2 lg:-mt-[.85rem]">Where Do You Wanna Go? <br /> Find Your Favotite Camp</h1>}
          </div>

          {hasDescription && <p className="xl:max-w-[520px] mt-6 regular-16 text-gray-30">
            {description}
          </p>}


          {isCampDetailsPage && <div className="mt-8 flex flex-wrap gap-5">
            <div className="flex gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src={starIcon}
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              {countOfReviews}
              <span className="regular-16 lg:regular-20 ml-1">
                {qualityOfReviews}
              </span>
            </p>
          </div>}

          {hasButton && <div className="w-full sm:w-1/2 md:w-full mt-8 flex flex-col sm:flex-row gap-3">
            <Button type="button" color="green" title="Download App" />
            <Button type="button" color="white" title="How We Work?" icon={<PlayIcon />} href={'/about-Hilink'} />
          </div>}


        </div>

        {isCampDetailsPage && <div className="flex relative">
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
                <p className="block text-gray-20">Elevation</p>
                <p className="bold-16 sm:bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </section>
  )
}

export default Hero;