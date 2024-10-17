"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/hilink-logo.svg";
import menu from "../../public/images/menu.svg";
import shoppingBag from "../../public/images/shopping-bag.png";
import { NAV_LINKS } from "@/constants";
import Button from "../Button/Button";
import UserIcon from "@/public/images/user";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

const Navbar = ({ onContactClick }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { totalItems } = useCart();
    const pathName = usePathname();

    useEffect(() => {
        if (mobileMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [mobileMenu]);

    const scrollToFooter = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });

        onContactClick();
    };

    const handleCartClick = () => {
        setMobileMenu(false);
    };

    return (
        <nav className={`flex justify-between items-center padding-container bg-white border-b border-neutral-100 sticky top-0 ${!mobileMenu ? 'opacity-90' : 'opacity-100'} z-[1000]`}>
            <Link href="/">
                <Image src={logo} alt="logo" className="w-[60px] h-[23px] xl:w-[74px] xl:h-[29px]" />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className={`nav-links regular-12 xl:regular-16 text-gray-40 flexCenter cursor-pointer mx-[.8rem] relative transition-all duration-300 ${pathName === link.href && link.key !== "contact_us" ? 'active' : ''
                            }`}
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

            <div className="hidden lg:flex items-center">
                <Link href={'/cart'} className="p-4 relative" onClick={handleCartClick}>
                    <Image className="size-6" src={shoppingBag} alt="cart" />
                    <div className="icon-shadow size-1 p-[.7rem] rounded-full flex justify-center items-center bg-[#ff0000] text-white text-sm absolute top-0 right-0">
                        {totalItems}
                    </div>
                </Link>

                <div className="flex justify-center ml-3">
                    <Button
                        type="button"
                        title="Login"
                        color="green"
                        icon={<UserIcon className="size-5 xl:size-6" stroke1="#fff" stroke2="#fff" />}
                        style="h-[3.5rem] xl:h-[3.9rem]"
                    />
                </div>
            </div>

            <div className="flex items-center lg:hidden">
                <Link href={'/cart'} className="p-4 relative" onClick={handleCartClick}>
                    <Image className="size-5" src={shoppingBag} alt="cart" />
                    <div className="icon-shadow size-1 p-[.6rem] xs:p-[.7rem] rounded-full flex justify-center items-center bg-[#ff0000] text-white text-xs xs:text-sm absolute top-[.15rem] right-[.15rem] xs:top-0 xs:right-0">
                        {totalItems}
                    </div>
                </Link>

                <Image
                    src={menu}
                    alt="menu"
                    width={20}
                    height={20}
                    className="size-5 inline-block ml-2 cursor-pointer"
                    onClick={() => setMobileMenu(true)}
                />
            </div>

            {mobileMenu && (
                <>
                    <MobileMenu setMobileMenu={setMobileMenu} scrollToFooter={scrollToFooter} />
                    <div className="w-full h-screen lg:hidden fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[100]"></div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
