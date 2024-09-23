"use client";
import { useState, useEffect, useRef } from "react";
import { EVERY_MAP, PEOPLE_URL } from "@/constants";
import Image from "next/image";
import foldedMap from "../../public/images/folded-map.svg";
import quote from "../../public/images/quote.svg";
import searchIcon from "../../public/images/search.svg";
import arrowLeft from "../../public/images/arrow-left.svg";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  searchTerm: string;
  onClick: (e: React.MouseEvent) => void;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  searchTerm,
  onClick,
}: CampProps) => {

  return (
    <div
      onClick={onClick}
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-550 p-4">
            <Image src={foldedMap} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
            {!searchTerm && (
              <p className="w-fit mt-2 py-[.1rem] px-[.35rem] bg-gray-10 opacity-60 rounded-full regular-14">
                Double Click To Pause/Play
              </p>
            )}
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={index}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 2;
  let clickTimeout: NodeJS.Timeout | null = null;

  const handleSingleClick = (slugifiedTitle: string) => {
    window.location.href = `/camp/${slugifiedTitle}`;
  };

  const handleDoubleClick = () => {
    setIsPaused((prev) => !prev);
  };

  const handleClick = (slugifiedTitle: string) => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();

      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
        handleDoubleClick();
      } else {
        clickTimeout = setTimeout(() => {
          handleSingleClick(slugifiedTitle);
          clickTimeout = null;
        }, 250);
      }
    };
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (searchTerm) {
      const matchingCamps = EVERY_MAP.filter((camp) =>
        camp.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const matchingIndex = EVERY_MAP.findIndex((camp) =>
        camp.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (matchingCamps.length > 0) {
        setIsPaused(true);
        const scrollContainer = scrollRef.current;

        const campWidth = scrollContainer?.children[matchingIndex]?.clientWidth || 0;
        scrollContainer.scrollLeft = matchingIndex * campWidth;
      }
    } else {
      setIsPaused(false);
    }
  }, [searchTerm]);

  return (
    <section className="relative flex flex-col pb-5 md:pb-10 px-0 xl:px-20 md:mt-48 lg:mt-32 xl:mt-40 shadow-md">
      <div
        className={`px-2 mx-auto sm:mx-3 xl:mx-7 py-2 flex text-gray-40 rounded-full shadow-md transition-[width] duration-500 ease-in-out ${isSearchIconClicked ? 'w-[90%] sm:w-[24%]' : 'w-[40px]'}`}
      >
        {!isSearchIconClicked ? (
          <Image
            className="size-6 cursor-pointer"
            src={searchIcon}
            alt="search"
            onClick={() => {
              setIsSearchIconClicked(true);
            }}
          />
        ) : (
          <Image
            className="size-6 cursor-pointer"
            src={arrowLeft}
            alt="close"
            onClick={() => {
              setIsSearchIconClicked(false);
            }}
          />
        )}

        {isSearchIconClicked && (
          <input
            className="w-full pl-2 text-center sm:text-start outline-none"
            type="text"
            placeholder="search your camp"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar w-full h-[340px] lg:h-[400px] xl:h-[640px] mt-5 flex items-start justify-start gap-8 overflow-x-auto cursor-pointer"
      >
        {(searchTerm
          ? EVERY_MAP.filter((camp) => camp.title.toLowerCase().includes(searchTerm.toLowerCase()))
          : EVERY_MAP.concat(EVERY_MAP)
        ).map((item, index) => (
          <CampSite
            key={index}
            backgroundImage={item.backgroundImage}
            title={item.title}
            subtitle={item.subtitle}
            peopleJoined={item.peopleJoined}
            searchTerm={searchTerm}
            onClick={handleClick(item.id.toLowerCase().replace(/\s+/g, "-"))} 
          />
        ))}
      </div>

      <div className="flexEnd mt-5 md:mt-10 px-0 md:px-6">
        <div className="w-full rounded-5xl p-8 xl:px-16 xl:py-16 relative overflow-hidden">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5">
            Starting from the anxiety of the climbers when visiting a new climbing location, the
            possibility of getting lost is very large. That's why we are here for those of you who
            want to start an adventure.
          </p>
          <Image src={quote} alt="camp-2" width={186} height={219} className="camp-quote" />
        </div>
      </div>
    </section>
  );
};

export default Camp;
