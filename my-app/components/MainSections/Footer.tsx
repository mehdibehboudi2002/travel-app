"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';

const Footer = ({ contactClicked }) => {
    const ContactUsSection = useRef(null);
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        if (contactClicked) {
            setTimeout(() => {
                setIsHighlighted(true);
            }, 690)

            setTimeout(() => {
                setIsHighlighted(false);
            }, 2500);
        }
    }, [contactClicked]);

    return (
        <footer className="flexCenter pb-10 pt-10 md:pt-20 bg-green-890 text-green-550">
            <div className="w-full padding-container max-container flex flex-col gap-14">
                <div className='flex flex-col sm:flex-row flex-wrap items-center sm:items-start sm:justify-between'>
                    <div className='flex flex-col items-center sm:items-start basis-full sm:basis-1/2 md:basis-auto'>
                        <p className='font-bold text-lg lg:text-xl'>
                            {FOOTER_LINKS.title}
                        </p>

                        <div>
                            {FOOTER_LINKS.links.map((item) => (
                                <Link key={item.label} href={item.href} className='flex mt-3 text-gray-20 text-xs lg:text-sm'>
                                    <p className='transition-all duration-200 hover:text-green-550'>
                                        {item.label}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div
                        id='contact-us'
                        className={`flex flex-col items-center sm:items-start basis-full sm:basis-1/2 md:basis-auto mt-10 sm:mt-0`}
                        ref={ContactUsSection}
                    >
                        <p className='font-bold text-lg lg:text-xl text-green-550'>
                            {FOOTER_CONTACT_INFO.title}
                        </p>

                        <div className={`transition-all duration-500 ${isHighlighted ? 'text-green-550' : 'text-gray-20'}`}>
                            {FOOTER_CONTACT_INFO.links.map((item) => (
                                <div key={item.label} className='flex text-xs lg:text-sm'>
                                    <p className='mr-2 mt-3'>{item.label}</p>
                                    <p className='mt-3'>:</p>
                                    <p className='ml-2 mt-3'>{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col items-center sm:items-start basis-full sm:basis-1/2 md:basis-auto mt-10 md:mt-0'>
                        <p className='font-bold text-lg lg:text-xl'>
                            {SOCIALS.title}
                        </p>

                        <div className='flex mt-3'>
                            {SOCIALS.links.map((item, index) => (
                                <Link href={item.href} target='_blank' key={index} className='size-7 lg:size-[2.35rem] p-[.4rem] lg:p-2 mx-1 sm:mr-3 rounded-full border border-gray-20 transition-all duration-300 hover:bg-green-550'>
                                    <Image src={item.image} alt="logo" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20" />
                <p className="w-full regular-14 text-center text-gray-20">2023 Hilink | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

