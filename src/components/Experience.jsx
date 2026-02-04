import React from 'react';
import { motion as Motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "React Developer Intern",
            company: "EOXON",
            duration: "Present (3 Months)",
            description: [
                "Developing dynamic and responsive user interfaces using React.js and Tailwind CSS.",
                "Collaborating with the backend team to integrate RESTful APIs.",
                "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
                "Participating in code reviews and contributing to team knowledge sharing."
            ]
        },
        {
            id: 2,
            role: "Cloud Support Engineer (L1) – Intern",
            company: "Hostup Cloud Technologies Pvt. Ltd, Bengaluru",
            duration: "June 2023 – July 2023",
            description: [
                "Configured cloud resources for application deployment.",
                "Deployed Java applications on Ubuntu cloud servers.",
                "Installed and configured JDK and server dependencies.",
                "Assisted in troubleshooting deployment and server issues.",
                "Collaborated with senior engineers to improve deployment efficiency by approximately 15%."
            ]
        }
    ];

    return (
        <div
            id="experience"
            className="w-full min-h-screen bg-black py-20 relative overflow-hidden text-white"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/10 to-black z-0 pointer-events-none"></div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
                        Experience
                    </p>
                </div>

                <div className="flex flex-col gap-8 mt-10">
                    {experiences.map(({ id, role, company, duration, description }) => (
                        <Motion.div
                            key={id}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-900/40 p-6 rounded-lg shadow-lg border border-gray-700/50 backdrop-blur-sm hover:border-l-4 hover:border-l-cyan-500 duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold text-gray-500 group-hover:text-cyan-500/30 duration-500 -z-10">{id}</div>
                            <h3 className="text-2xl font-bold text-cyan-400">{role}</h3>
                            <p className="text-xl text-white mt-1">{company}</p>
                            <p className="text-sm text-gray-500 italic mb-4">{duration}</p>
                            <ul className="list-disc list-inside mt-4 text-gray-400 space-y-2">
                                {description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
