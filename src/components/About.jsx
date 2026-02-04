import React from 'react';
import { motion as Motion } from 'framer-motion';

const About = () => {
    return (
        <div
            id="about"
            className="w-full min-h-screen bg-black text-white py-24 flex items-center"
        >
            <div className="w-full px-8 md:px-12 lg:px-16">
                {/* Two Column Layout - Symmetric width with Vertical Stretching */}
                <div className="grid md:grid-cols-[2fr,1fr] gap-16 lg:gap-24 items-stretch max-w-7xl mx-auto">
                    {/* Left Side - The biography and cards (Anchor column) */}
                    <div className="flex flex-col justify-start">
                        <Motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="pb-6"
                        >
                            <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
                                About Me
                            </p>
                        </Motion.div>

                        {/* Paragraphs */}
                        <div className="flex flex-col gap-6">
                            <Motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-base md:text-lg text-gray-300 leading-relaxed text-justify"
                            >
                                I am a motivated <strong>Master of Computer Applications (MCA)</strong> student with a strong foundation in software development, analytics, and modern web technologies. I enjoy building user-friendly, scalable applications and continuously improving my skills through hands-on projects and real-world experience.
                            </Motion.p>

                            <Motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-base md:text-lg text-gray-300 leading-relaxed text-justify"
                            >
                                I am currently working as a <strong>React Developer Intern at EOXON</strong> (February – April 2024), gaining practical exposure to frontend development. I focus on developing reusable UI components, implementing responsive designs, and following industry best practices.
                            </Motion.p>

                            <Motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-base md:text-lg text-gray-300 leading-relaxed text-justify"
                            >
                                Previously, I have worked on projects across full-stack development, DevOps automation, IoT systems, cloud support, and data analytics. I have hands-on experience with <strong>React, Node.js, MongoDB, Python, Docker, and Jenkins</strong>.
                            </Motion.p>

                            <Motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-base md:text-lg text-gray-300 leading-relaxed text-justify"
                            >
                                I am passionate about solving problems and transforming ideas into efficient software solutions. I am currently seeking <strong>entry-level software or frontend developer</strong> opportunities where I can grow and contribute to innovative projects.
                            </Motion.p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {[
                                { title: "Education", desc: "MCA Candidate", icon: "🎓" },
                                { title: "Experience", desc: "React Intern @ EOXON", icon: "🚀" },
                                { title: "Interests", desc: "Full Stack & DevOps", icon: "💻" }
                            ].map((item, index) => (
                                <Motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <h3 className="text-base font-bold text-cyan-500 mb-0.5">{item.title}</h3>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Taller Absolute Image (Restored Symmetry) */}
                    <div className="relative w-full h-full min-h-[400px]">
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 flex items-stretch"
                        >
                            <div className="relative group w-full h-full">
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                                {/* Image Container */}
                                <div className="relative h-full rounded-2xl overflow-hidden border-4 border-gray-800 group-hover:border-cyan-500 transition-all duration-300 shadow-2xl bg-gray-900">
                                    <img
                                        src="/src/assets/graduate.jpeg"
                                        alt="Trisa Dominic"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full bg-gray-800 text-gray-500 text-sm">Photo</div>';
                                        }}
                                    />
                                </div>
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;
