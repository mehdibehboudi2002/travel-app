"use client";
import { useParams } from "next/navigation";
import { SHOP_CATEGORIES } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const ShopProducts = () => {
  const { category } = useParams();
  const selectedCategory = SHOP_CATEGORIES.categories.find(
    (cat) => cat.category === category
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="w-full max-container">
        <div className="size-full flex justify-center flex-wrap my-6">
          {selectedCategory?.products.map((item, index) => {
            const itemsPerRow = 4;

            const isLastRow =
              index >=
              selectedCategory.products.length - 
              (selectedCategory.products.length % itemsPerRow || itemsPerRow);
            const isLastColumn = (index + 1) % itemsPerRow === 0;
            const isLastInLastRow =
              isLastRow && (index + 1) === selectedCategory.products.length;

            return (
              <div
                key={index}
                className={`lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center p-4 
                ${!isLastInLastRow && !isLastColumn ? "xl:border-r" : ""} 
                ${!isLastRow ? "xl:border-b" : ""} 
                cursor-pointer hover:shadow-2xl
                transition-opacity duration-500 ease-in-out
                ${isVisible ? `fade-in-animation` : ""}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="w-full flex justify-between px-5 pt-3 text-sm">
                  <p className="truncate">{item.name}</p>
                  <p className="text-green-550">{item.price}</p>
                </div>

                <div className="w-72 lg:w-80 my-3 flex flex-col justify-between items-center border bg-blue-70 relative rounded-t-md rounded-b-3xl">
                  <div className="w-full flex text-green-550">
                    <button className="w-1/2 transition-all duration-200 hover:bg-green-550 hover:text-blue-70 rounded-ss-md">
                      +
                    </button>
                    <button className="w-1/2 transition-all duration-200 hover:bg-green-550 hover:text-blue-70 rounded-se-md">
                      -
                    </button>
                  </div>

                  <div className="w-full h-52 lg:h-60 flex flex-col relative">
                    <Image
                      className="rounded-b-3xl"
                      src={item.image}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ShopProducts;

