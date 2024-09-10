import Image from "next/image";
import campIcon from "../public/images/camp.svg";
import startIcon from "../public/images/star.svg";
import closeIcon from "../public/images/close.svg";
import Button from "./Button";
import PlayIcon from "@/public/images/play";

const Hero = () => {
  return (
    <section className="padding-container flex flex-col xl:flex-row items-center md:items-start gap-10 my-5 md:my-2 py-10 pb-32 lg:py-20">
      <div className="hero-map" ></div>

      <div className="w-full xl:w-1/2 relative z-20 flex flex-1 flex-col items-center md:items-start text-center md:text-start">
      <div className="w-full flex flex-col">
        <Image
          src={campIcon}
          width={"50"}
          height={"50"}
          alt="camp"
        />
        <h1 className="bold-32 lg:bold-64 lg:-mt-5">Putuk Truno Camp Area</h1>
        </div>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 mx-auto md:mx-0 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
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
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            extraStyles="btn-shadow w-full sm:w-1/2 md:w-fit transition-all duration-300 hover:opacity-80 mx-auto md:mx-0"
          />
          <Button
            type="button"
            title="How we work?"
            icon={<PlayIcon />}
            variant="btn_white_text"
            extraStyles="btn-shadow w-full sm:w-1/2 md:w-fit transition-all duration-300 hover:opacity-65 mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="relative flex">
        <div className="w-[268px] relative z-20 flex flex-col gap-8 rounded-3xl bg-green-890 px-7 py-8">

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image className="cursor-pointer" src={closeIcon} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;