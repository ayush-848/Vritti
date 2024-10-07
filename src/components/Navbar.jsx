import React, { useState, useEffect } from 'react';
import { Link } from '@nextui-org/react';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is beyond the Hero section
            const heroSectionHeight = document.querySelector('.contact')?.offsetHeight || 500;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Adjust scroll position to change color AFTER the hero section
            if (scrollTop > heroSectionHeight) { // Added 50px buffer
                setIsScrolled(true); // Navbar becomes fixed and background color changes
            } else {
                setIsScrolled(false); // Navbar remains transparent
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#161D6F]' : 'bg-transparent'
            }`}
        >
            <div className="w-full flex justify-between items-center py-4 px-2 sm:px-4">
                <a href="/">
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="Vritti Academy Logo"
                        className="w-1/4 max-w-[171px] h-auto"
                    />
                    <h1 className="text-white text-2xl font-bold ml-2 sm:ml-0 font-montserrat">
                        Vritti Academy
                    </h1>
                </div>
                </a>
                <div className="flex space-x-4 sm:space-x-8">
                    <Link href="/" className="text-white text-lg font-semibold font-montserrat hover:text-gray-300 transition duration-300">
                        Home
                    </Link>
                    <Link href="#about" className="text-gray-300 text-lg font-semibold font-montserrat hover:text-white transition duration-300">
                        About
                    </Link>
                    <Link href="#contact" className="text-gray-300 text-lg font-semibold font-montserrat hover:text-white transition duration-300">
                        Enroll
                    </Link>
                    <Link href="/leaderboard" className="text-gray-300 text-lg font-semibold font-montserrat hover:text-white transition duration-300">
                        Leaderboard
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
