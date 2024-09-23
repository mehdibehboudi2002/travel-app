"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/hilink-logo.svg";
import menu from "../../public/images/menu.svg";
import { NAV_LINKS } from "@/constants";
import Button from "../Button/Button";
import UserIcon from "@/public/images/user";

const Navbar = ({ onContactClick }) => {
    const scrollToFooter = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });

        onContactClick();  
    };

    return (
        <nav className="flex justify-between items-center padding-container bg-white opacity-90 border-b border-neutral-100 sticky top-0 z-[100]">
            <Link href="/">
                <Image src={logo} alt="logo" className="w-[60px] h-[23px] xl:w-[74px] xl:h-[29px]" />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-12 xl:regular-16 text-gray-40 flexCenter cursor-pointer transition-all hover:font-bold mx-4"
                        onClick={(e) => {
                            if (link.key === "contact_us") {
                                e.preventDefault();
                                scrollToFooter();
                            }
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="hidden lg:flex justify-center">
                <Button
                    type="button"
                    title="Login"
                    color="green"
                    icon={<UserIcon className="size-5 xl:size-6" stroke1="#fff" stroke2="#fff" />}
                    style="h-[3.5rem] xl:h-[3.9rem]"
                />
            </div>

            <Image
                src={menu}
                alt="menu"
                width={24}
                height={24}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    );
};

export default Navbar;
