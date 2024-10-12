"use client";
import { SHOP_CATEGORIES } from "@/constants";
import Image from "next/image";
import searchIcon from "../../public/images/search.svg";
import arrowLeft from "../../public/images/arrow-left.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCategories = SHOP_CATEGORIES.categories.filter((category) => {
    const categoryMatch = category.category.toLowerCase().includes(searchTerm.toLowerCase());
    const productMatch = category.products.some((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return categoryMatch || productMatch;
  });

  return (
    <>
      <section className="w-full max-container flex flex-col items-center">
        <div
          className={`mt-5 pl-2 flex text-gray-40 rounded-full shadow-md transition-[width] duration-500 ease-in-out ${isSearchIconClicked ? 'w-[90%] sm:w-[50%] md:w-[37%] xl:w-[24%]' : 'w-[40px]'}`}
        >
          {!isSearchIconClicked ? (
            <Image
              className="size-6 my-2 cursor-pointer"
              src={searchIcon}
              alt="search"
              onClick={() => {
                setIsSearchIconClicked(true);
              }}
            />
          ) : (
            <Image
              className="size-6 my-2 cursor-pointer"
              src={arrowLeft}
              alt="close"
              onClick={() => {
                setIsSearchIconClicked(false);
                setSearchTerm(""); 
              }}
            />
          )}

          {isSearchIconClicked && (
            <input
              className="w-full pl-2 rounded-full outline-none"
              type="text"
              placeholder="search for categories or products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
        <div className="size-full flex justify-center flex-wrap my-0 lg:my-6">
          {filteredCategories.map((category, index) => {
            const itemsPerRow = 4;
            const isLastRow =
              index >=
              filteredCategories.length - 
                (filteredCategories.length % itemsPerRow || itemsPerRow);
            const isLastColumn = (index + 1) % itemsPerRow === 0;
            const isLastInLastRow =
              isLastRow && (index + 1) === filteredCategories.length;

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


