"use client";
import Image from "next/image";
import campIcon from "../../public/images/camp.svg";
import PlayIcon from "@/public/images/play";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BasicRating from "../Rating";

type HeroProps = {
  isCampDetailsPage?: boolean;
  campName?: string;
  countOfReviews?: number;
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
    <section className={`padding-container mt-1 md:mt-5 ${isCampDetailsPage ? 'mb-24 sm:mb-52' : 'mb-10 xs:mb-28 2xs:mb-40 sm:mb-80 xl:mb-36'} pt-10 pb-32`}>
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

          
            
          


          {isCampDetailsPage && <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-2">
            <BasicRating ratable={true} ratingTxt="Your Reviews" className="mt-8"/>
              <BasicRating ratable={false} ratingTxt={`${`${countOfReviews}k`} ${qualityOfReviews}`} className="mt-8"/>
            </div>

          </div>}

          {hasButton && <div className="w-full sm:w-1/2 md:w-full mt-8 flex flex-col sm:flex-row gap-3">
            <Button type="button" color="green" title="Download App" />
            <Button type="button" color="white" title="How We Work?" icon={<PlayIcon />} href={'/about-Hilink'} />
          </div>}


        </div>
      </div>
    </section>
  )
}

export default Hero;