import Image from 'next/image';
import closeIcon from '../../public/images/close2.svg';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_LINKS } from '@/constants';

type MobileMenuPropsType = {
    setMobileMenu: (state: boolean) => void;
    scrollToFooter: () => void;
}

const MobileMenu = ({ setMobileMenu, scrollToFooter }: MobileMenuPropsType) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathName = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuVisible(false);
                setTimeout(() => {
                    setMobileMenu(false);
                }, 300);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setMobileMenu]);

    useEffect(() => {
        setMenuVisible(true);
    }, []);

    return (
        <nav
            ref={menuRef}
            className={`w-3/5 h-screen py-16 px-10 lg:hidden fixed top-0 bottom-0 left-0 right-0 bg-white transition-transform duration-300 ease-in-out transform rounded-e-3xl ${menuVisible ? 'translate-x-0' : '-translate-x-full'} z-[1000]`}
        >
            <Image
                className="size-7 absolute top-2 right-2 cursor-pointer"
                src={closeIcon}
                alt="close"
                onClick={() => {
                    setMenuVisible(false);
                    setTimeout(() => {
                        setMobileMenu(false);
                    }, 300);
                }}
            />

            <div className='w-full flex flex-col'>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.key}
                        href={link.href}
                        className={`mobile-menu-link w-fit my-3 regular-14 text-gray-40 transition-all duration-300 ${pathName === link.href && link.key !== "contact_us" ? 'active' : ''}`}
                        onClick={(e) => {
                            setMenuVisible(false);
                            setTimeout(() => {
                                setMobileMenu(false);
                            }, 300);
                            if (link.key === "contact_us") {
                                e.preventDefault();
                                scrollToFooter();
                            }
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default MobileMenu;
