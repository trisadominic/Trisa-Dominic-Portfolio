import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };
    return (
        <div
            id="contact"
            className="w-full min-h-screen bg-black text-white py-24 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-screen-lg mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                {/* Section Title */}
                <div className="pb-12 text-left">
                    <Motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2"
                    >
                        Get In Touch
                    </Motion.h2>
                </div>

                <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-center">
                    {/* Left Side: Let's Talk */}
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Let's Talk</h3>
                            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                                Have a project in mind or want to collaborate? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <HiOutlineMail className="text-cyan-400 text-xl" />
                                </div>
                                <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base">
                                    dominictrisa@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                                </div>
                                <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base">
                                    Kerala, India
                                </span>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Right Side: Contact Form (Smaller Box) */}
                    <Motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 shadow-xl relative group hover:border-cyan-500/20 transition-all duration-500 max-w-md mx-auto w-full"
                    >
                        <iframe
                            name="hidden_iframe"
                            id="hidden_iframe"
                            style={{ display: 'none' }}
                        ></iframe>
                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfp43hNUoNdUQ-ij39zZROUeKNOLsqJc7GONB8W2V5i4qFITA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4"
                        >
                            <input
                                type="text"
                                name="entry.713902180"
                                required
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600 text-sm"
                            />

                            <input
                                type="email"
                                name="entry.1665306659"
                                required
                                placeholder="Your Email"
                                className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600 text-sm"
                            />

                            <textarea
                                name="entry.442901677"
                                required
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600 text-sm resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="group relative w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-base overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-[0.98]"
                            >
                                <span className="relative z-10">Send Message</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </form>
                    </Motion.div>
                </div>
            </div>

            {/* Confirmation Popup Modal */}
            <AnimatePresence>
                {submitted && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSubmitted(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        ></Motion.div>

                        <Motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl relative z-10 max-w-sm w-full text-center"
                        >
                            <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                            <p className="text-gray-400 mb-8">
                                Thank you for reaching out. I've received your message and will get back to you soon.
                            </p>

                            <button
                                onClick={() => setSubmitted(false)}
                                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                            >
                                Close
                            </button>
                        </Motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
