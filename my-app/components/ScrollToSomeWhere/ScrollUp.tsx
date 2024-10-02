"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import arrowTop from '../../public/images/arrow-top.svg';


const ScrollUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="top-to-btm">
            <div
                className={`icon-position icon-style btn-shadow bg-green-550 text-white p-[.1rem] md:p-[.2rem] lg:p-[.45rem] fixed bottom-1 right-1 md:bottom-3 md:right-3 lg:bottom-5 lg:right-5 cursor-pointer  rounded-full transition-all duration-300 z-[500] ${showTopBtn ? 'opacity-100' : 'opacity-0'}`}
                onClick={goToTop}
            >
                <Image src={arrowTop} alt='top' />
            </div>
        </div>
    );
};

export default ScrollUp;