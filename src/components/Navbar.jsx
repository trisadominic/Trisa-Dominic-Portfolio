import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },

        { id: 5, link: 'experience' },
        { id: 6, link: 'certifications' },
        { id: 7, link: 'services' },
        { id: 9, link: 'soft-skills' },
        { id: 8, link: 'contact' },
    ];

    return (
        <Motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center w-full h-24 px-8 text-white absolute top-0 z-50 bg-transparent"
        >
            {/* Logo */}
            <div>
                <h1 className="text-3xl font-bold font-sans tracking-wide">Trisa.</h1>
            </div>

            {/* Desktop Links (Centered) */}
            <ul className="hidden md:flex gap-8 items-center bg-gray-900/50 px-8 py-3 rounded-full backdrop-blur-md border border-gray-700/50">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200 text-sm tracking-wide"
                    >
                        <a href={`#${link}`}>{link}</a>
                    </li>
                ))}
            </ul>

            {/* Right Side (CV Button) */}
            <div className="hidden md:flex items-center gap-4">
                <a
                    href="/Resume%20Trisa.pdf"
                    download={true}
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-600/30 duration-300 flex items-center gap-2 text-sm"
                >
                    Download CV <span className="text-xl">↓</span>
                </a>
            </div>

            {/* Mobile Menu Icon */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 text-gray-400 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-xl text-gray-400 z-40">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 duration-300"
                        >
                            <a onClick={() => setNav(!nav)} href={`#${link}`}>
                                {link}
                            </a>
                        </li>
                    ))}
                    <li className="mt-8">
                        <a
                            href="/Resume%20Trisa.pdf"
                            download={true}
                            className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg"
                        >
                            Download CV
                        </a>
                    </li>
                </ul>
            )}
        </Motion.div>
    );
};

export default Navbar;
