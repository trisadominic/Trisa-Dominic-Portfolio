import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter';
import { motion as Motion } from 'framer-motion';
import profileImg from '../assets/Trisa Dominic.jpg';

const Hero = () => {
    const stats = [
        { id: 1, text: "2", label: "Months Experience" },
        { id: 2, text: "4+", label: "Projects Completed" },
        { id: 3, text: "18+", label: "Technologies Mastered" },
        { id: 4, text: "3+", label: "Certifications" },
    ];

    const links = [
        { id: 1, icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/trisa-dominic/' },
        { id: 2, icon: <FaGithub size={20} />, href: 'https://github.com/trisadominic' },
        { id: 3, icon: <HiOutlineMail size={20} />, href: 'mailto:dominictrisa@gmail.com' },
        { id: 4, icon: <BsFillPersonLinesFill size={20} />, href: '/Resume%20Trisa.pdf', download: true },
    ];

    return (
        <div
            id="home"
            className="w-full h-screen bg-black relative overflow-hidden flex flex-col justify-between"
        >
            {/* Background "Smoke" Effect - Full Screen */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-black/95 z-0 pointer-events-none"></div>

            {/* Navbar Space */}
            <div className="h-24 shrink-0"></div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-16 relative z-10">

                {/* Image Section (Left) */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <Motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10"
                    >
                        {/* Neon Ring Container */}
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-2">


                            {/* Image Container */}
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 relative z-10 bg-black">
                                <img
                                    src={profileImg}
                                    alt="Trisa Dominic"
                                    className="w-full h-full object-cover object-top hover:scale-110 duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-center text-gray-500 p-4">Add Image<br/>src/assets/Trisa Dominic.jpg</div>';
                                    }}
                                />
                            </div>
                        </div>
                    </Motion.div>
                </div>

                {/* Content Section (Right) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                    <Motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-400 mb-2 font-medium"
                    >
                        Hello, I'm
                    </Motion.p>

                    <Motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight"
                    >
                        Trisa Dominic
                    </Motion.h1>

                    <Motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2"
                    >
                        And I'm a <span className="text-cyan-400">
                            <Typewriter
                                words={['Frontend Developer', 'Full Stack Enthusiast', 'Tech Explorer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </Motion.h2>

                    <Motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-gray-400 text-base leading-relaxed max-w-lg mb-8"
                    >
                        I am an MCA student with hands-on experience in full-stack development, DevOps fundamentals, cloud support, IoT systems, and data analytics. Passionate about building scalable applications, automating deployments, and transforming data into meaningful insights.
                    </Motion.p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mb-8">
                        {links.map((link, index) => (
                            <Motion.a
                                key={link.id}
                                href={link.href}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + (index * 0.1) }}
                                className="w-10 h-10 flex items-center justify-center rounded bg-gray-800 border-2 border-transparent hover:border-cyan-400 text-gray-400 hover:text-white duration-300"
                                download={link.download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.icon}
                            </Motion.a>
                        ))}
                    </div>

                    {/* Buttons */}
                    <Motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-cyan-500 text-black font-bold rounded shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 duration-300">
                            Hire Me
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-transparent border border-cyan-500 text-white font-bold rounded hover:bg-cyan-500/10 duration-300">
                            Contact Me
                        </a>
                    </Motion.div>
                </div>
            </div>

            {/* Stats Bar (Bottom) - Separated Boxes */}
            <div className="w-full bg-black/80 backdrop-blur-md p-6 md:p-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <Motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 + (index * 0.2) }}
                            className="flex flex-col items-center justify-center p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 hover:bg-gray-900 duration-300 group"
                        >
                            <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-400 duration-300">{stat.text}</span>
                            <div className="mt-2 text-center">
                                <span className="block text-xs text-cyan-500 uppercase tracking-wider mb-1">Verified</span>
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-wide leading-tight">{stat.label}</span>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Hero;
