"use client";
import { SHOP_CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="w-full max-container">
        <div className="size-full flex justify-center flex-wrap my-0 lg:my-6">
          {SHOP_CATEGORIES.categories.map((category, index) => {
            const itemsPerRow = 4;
            const isLastRow =
              index >=
              SHOP_CATEGORIES.categories.length -
                (SHOP_CATEGORIES.categories.length % itemsPerRow || itemsPerRow);
            const isLastColumn = (index + 1) % itemsPerRow === 0;
            const isLastInLastRow =
              isLastRow && (index + 1) === SHOP_CATEGORIES.categories.length;

            return (
              <Link
                href={`/products/${category.id}`} 
                key={index}
                className={`lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center p-4 
                  ${!isLastInLastRow && !isLastColumn ? "xl:border-r" : ""} 
                  ${!isLastRow ? "xl:border-b" : ""} 
                  hover:shadow-2xl
                  transition-opacity duration-500 ease-in-out 
                  ${isVisible ? `fade-in-animation` : ""}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="w-full flex justify-between px-5 pt-3 text-sm">
                  <p className="truncate">{category.category}</p>
                </div>

                <div className="w-72 lg:w-80 my-3 flex flex-col justify-between items-center border bg-blue-70 relative rounded-t-md rounded-b-3xl">
                  <div className="w-full h-52 lg:h-60 flex flex-col relative">
                    <Image
                      className="rounded-b-3xl"
                      src={category.categoryImage}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shop;

