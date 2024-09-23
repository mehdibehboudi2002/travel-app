"use client";
import { ABOUT_HILINK } from "@/constants";
import { useEffect, useState } from "react";

const AboutHilinkContent = () => {

    const [onLoadPageAnimate, setOnLoadPageAnimate] = useState<boolean>(false);

    useEffect(() => {
      setOnLoadPageAnimate(true);
    }, [])

    return <>
        <section className={`padding-container my-5 md:my-10 transition-all duration-1000 ${onLoadPageAnimate ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h1 className="bold-32 lg:bold-52">
                {ABOUT_HILINK.title}
            </h1>

            {ABOUT_HILINK.sections.map((item, index) => (
                <div key={index} className='w-fit flex flex-col my-10'>
                    <p className='text-gray-30 text-sm md:text-base'>
                        {item.description}
                    </p>
                </div>
            ))}

        </section>
    </>
}

export default AboutHilinkContent;