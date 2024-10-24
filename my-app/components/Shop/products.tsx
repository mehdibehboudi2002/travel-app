"use client";
import { useParams } from "next/navigation";
import { SHOP_CATEGORIES } from "@/constants";
import Image from "next/image";
import searchIcon from "../../public/images/search.svg";
import arrowLeft from "../../public/images/arrow-left.svg";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

type ItemNum = {
  [key: string]: number;
};

const ShopProducts = () => {
  const [itemNums, setItemNums] = useState<ItemNum>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);
  const { category } = useParams<{ category: string }>();
  const selectedCategory = SHOP_CATEGORIES.categories.find(
    (cat) => cat.category === category
  );

  const { addItemToCart, removeItemFromCart, cart } = useCart();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);

    const nums: ItemNum = {};
    cart.forEach((item) => {
      nums[item.id] = item.quantity;
    });
    setItemNums(nums);
  }, [cart]);

  const handleIncrement = (item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    inHowManyCarts: number;
  }) => {
    addItemToCart(item);
    setItemNums((prevNums) => ({
      ...prevNums,
      [item.id]: (prevNums[item.id] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId: string) => {
    removeItemFromCart(itemId);
    setItemNums((prevNums) => ({
      ...prevNums,
      [itemId]: Math.max((prevNums[itemId] || 0) - 1, 0),
    }));
  };

  const filteredProducts = selectedCategory?.products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
            placeholder="search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>
      <div className="size-full flex justify-center flex-wrap my-0 lg:my-6">
        {filteredProducts?.map((item, index) => {
          const itemsPerRow = 4;
          const isLastRow =
            index >=
            filteredProducts.length - (filteredProducts.length % itemsPerRow || itemsPerRow);
          const isLastColumn = (index + 1) % itemsPerRow === 0;
          const isLastInLastRow =
            isLastRow && (index + 1) === filteredProducts.length;

          return (
            <div
              key={item.id}
              className={`lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center p-4 text-blue-70
                ${!isLastInLastRow && !isLastColumn ? "xl:border-r" : ""} 
                ${!isLastRow ? "xl:border-b" : ""} 
                cursor-pointer hover:shadow-2xl
                transition-opacity duration-500 ease-in-out
                ${isVisible ? `fade-in-animation` : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onClick={() => {
                window.open(`/product-details/${item.id}`, '_blank');
              }}
            >
              <div className="w-full flex justify-between px-5 pt-3 text-sm">
                <p className="truncate">{item.name}</p>
                <p className="text-green-550">${item.price}</p>
              </div>

              <div className="w-72 lg:w-80 my-3 flex flex-col justify-between items-center border bg-blue-70 relative rounded-t-md rounded-b-3xl">
                <div className="w-full flex text-green-550">
                  <button
                    className="w-1/2 transition-all duration-200 hover:bg-green-550 hover:text-blue-70 rounded-ss-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIncrement(item);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="w-1/2 transition-all duration-200 hover:bg-green-550 hover:text-blue-70 rounded-se-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDecrement(item.id);
                    }}
                  >
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
              <p className={`${itemNums[item.id] > 0 ? 'text-green-550' : 'text-gray-300'}`}>{itemNums[item.id] || 0}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopProducts;

