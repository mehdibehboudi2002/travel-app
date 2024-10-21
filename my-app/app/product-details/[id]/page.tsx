"use client";
import { useParams } from "next/navigation";
import { SHOP_CATEGORIES } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductDetail {
    key: string;
    value: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    images: string[]; 
    description: string;
    details: ProductDetail[];
}

const ProductDetails: React.FC = () => {
    const [item, setItem] = useState<Product | null>(null);
    const [mainImg, setMainImg] = useState<string | null>(null);
    const [galleryAnimate, setGalleryAnimate] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>(); 

    useEffect(() => {
        setGalleryAnimate(true);

        const timer = setTimeout(() => {
            setGalleryAnimate(false);
        }, 90);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (id) {
            let foundItem: Product | null = null;
            const decodedId = decodeURIComponent(id).trim();

            for (const category of SHOP_CATEGORIES.categories) {
                foundItem = category.products.find(product => product.id === decodedId) || null;
                if (foundItem) break;
            }

            if (foundItem) {
                setItem(foundItem);
                setMainImg(foundItem.images[0] || null); 
            }
        }
    }, [id]);

    if (!item) {
        return <p>Loading product details...</p>;
    }

    return (
        <section className="flex flex-col items-center my-7 text-blue-70 text-center">
            <h1 className="text-sm lg:text-base font-bold">{item.name}</h1>
            <p className="mt-2 lg:mt-1 text-xs lg:text-base">Price: <span className="font-bold">${item.price}</span></p>

            <div className="w-full flex flex-col my-5 sm:my-10">
                <div className="w-full flex justify-center">
                    <Image
                        key={mainImg}
                        className="fade-in-animation w-[14rem] h-[12.5rem] sm:w-[28rem] sm:h-[25rem] rounded-2xl"
                        src={mainImg || ''} 
                        alt={`${item.name} main image`}
                        width={900}
                        height={900}
                    />
                </div>
                <div className="w-full flex justify-center">
                    {item.images.map((imgUrl, index) => (
                        <Image
                            className={`${galleryAnimate ? 'fade-in-animation' : ''} size-20 sm:size-40 mt-5 mx-2 border rounded-2xl cursor-pointer ${imgUrl !== mainImg ? 'opacity-45' : ''}`}
                            key={`${imgUrl}-${index}`}
                            src={imgUrl}
                            alt={`${item.name} image`}
                            width={200}
                            height={200}
                            onClick={() => setMainImg(imgUrl)}
                        />
                    ))}
                </div>
            </div>

            <label className="text-sm lg:text-base font-bold">Description:</label>
            <p className="mt-2 lg:mt-1 text-xs lg:text-base">{item.description}</p>

            <div className="w-full padding-container mt-7">
                {item.details.map((detail, index) => (
                    <div key={detail.key} className={`flex py-3 text-green-550 text-[.5rem] 2xs:text-xs lg:text-base ${index % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}>
                        <div className="w-1/2 mx-2 flex justify-center">
                            <p>{detail.key}</p>
                        </div>

                        <div className="w-1/2 mx-2 flex justify-center">
                            <p>{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProductDetails;
