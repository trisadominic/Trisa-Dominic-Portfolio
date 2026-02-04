import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaLightbulb, FaHandsHelping, FaComments, FaRegClock, FaUsers, FaSyncAlt, FaMicroscope } from 'react-icons/fa';

const SoftSkills = () => {
    const softSkills = [
        { id: 1, title: "Analytical Thinking", icon: <FaMicroscope size={40} className="text-cyan-400" /> },
        { id: 2, title: "Problem Solving", icon: <FaLightbulb size={40} className="text-cyan-400" /> },
        { id: 3, title: "Communication", icon: <FaComments size={40} className="text-cyan-400" /> },
        { id: 4, title: "Time Management", icon: <FaRegClock size={40} className="text-cyan-400" /> },
        { id: 5, title: "Teamwork", icon: <FaUsers size={40} className="text-cyan-400" /> },
        { id: 6, title: "Adaptability", icon: <FaSyncAlt size={40} className="text-cyan-400" /> },
        { id: 7, title: "Quick Learner", icon: <FaHandsHelping size={40} className="text-cyan-400" /> },
    ];

    return (
        <div
            id="soft-skills"
            className="w-full min-h-[60vh] bg-black py-20 relative overflow-hidden text-white"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/10 to-black z-0 pointer-events-none"></div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
                        Soft Skills
                    </p>
                    <p className="py-6 text-gray-400">Interpersonal & cognitive abilities</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                    {softSkills.map(({ id, title, icon }) => (
                        <Motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, delay: id * 0.1 }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-cyan-500/50 shadow-lg shadow-cyan-500/5 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
