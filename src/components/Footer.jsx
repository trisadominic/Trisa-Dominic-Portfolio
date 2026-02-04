import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            id: 1,
            icon: <FaLinkedin size={24} />,
            href: 'https://www.linkedin.com/in/trisa-dominic/',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        {
            id: 2,
            icon: <FaGithub size={24} />,
            href: 'https://github.com/trisadominic',
            label: 'GitHub',
            color: 'hover:text-gray-400'
        },
        {
            id: 3,
            icon: <FaEnvelope size={24} />,
            href: 'mailto:dominictrisa@gmail.com',
            label: 'Email',
            color: 'hover:text-cyan-400'
        }
    ];

    const quickLinks = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        { id: 4, name: 'Experience', href: '#experience' },
        { id: 5, name: 'Projects', href: '#projects' },
        { id: 6, name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="w-full bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-screen-xl mx-auto px-8 py-16 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                            Trisa.
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting digital experiences with passion and precision.
                            Let's build something amazing together.
                        </p>
                    </Motion.div>

                    {/* Quick Links */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-cyan-400">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Motion.div>

                    {/* Connect Section */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-cyan-400">Connect</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Let's connect and create something extraordinary
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Motion.a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`text-gray-400 ${social.color} transition-all duration-300 p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50`}
                                >
                                    {social.icon}
                                </Motion.a>
                            ))}
                        </div>
                    </Motion.div>
                </div>

                {/* Divider */}
                <Motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
                ></Motion.div>

                {/* Bottom Section */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
                >
                    <p className="flex items-center gap-2">
                        © {currentYear} Trisa Dominic. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Made with <FaHeart className="text-cyan-500 animate-pulse" /> and lots of coffee
                    </p>
                </Motion.div>
            </div>
        </footer>
    );
};

export default Footer;
