import React from 'react';
import { motion as Motion } from 'framer-motion';

// Import images
import harvestLoopImg from '../assets/Doc1.jpeg';
import smartAcademyImg from '../assets/Doc2.jpeg';

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            title: "HarvestLoop",
            subtitle: "Agricultural Information Platform",
            description: "Full-stack platform connecting farmers directly with buyers. Features Email OTP auth, role-based access, and a Python-based price suggestion engine.",
            stack: "Node.js, Express, MongoDB, Tailwind, Python",
            demo: "https://github.com/trisadominic/HarvestLoop",
            code: "https://github.com/trisadominic/HarvestLoop",
            date: "Oct 2025",
            image: harvestLoopImg
        },
        {
            id: 2,
            title: "Smart Academy",
            subtitle: "E-Learning Platform",
            description: "E-Learning platform with automated builds/deployments using Jenkins CI/CD pipelines and Docker containerization.",
            stack: "HTML, CSS, JS, MongoDB, Jenkins, Docker",
            demo: "https://github.com/trisadominic/Smart_Academy",
            code: "https://github.com/trisadominic/Smart_Academy",
            date: "Apr 2024",
            image: smartAcademyImg
        },
        {
            id: 3,
            title: "Smart Fire Safety System",
            subtitle: "IoT Project",
            description: "IoT-based system with flame/smoke sensors for real-time monitoring and automated emergency responses (alarms, pumps).",
            stack: "Arduino, IoT Sensors, C++",
            demo: "/Doc1.pdf",
            code: "/Doc1.pdf",
            date: "Oct 2025",
            isDownload: true
        },
        {
            id: 4,
            title: "Data Analysis & Optimization",
            subtitle: "Capstone Project",
            description: "Data extraction, cleaning, and filtering from multiple sources. Interactive dashboards using Tableau and process mining with Celonis.",
            stack: "Tableau, Celonis, Excel",
            demo: "/Doc2.pdf",
            code: "/Doc2.pdf",
            date: "May 2024",
            isDownload: true
        },
    ];

    return (
        <div
            id="projects"
            className="bg-black w-full text-white min-h-screen py-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">
                        Projects
                    </p>
                    <p className="py-6">Check out my recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, title, subtitle, description, stack, demo, code, date, isDownload, image }, index) => (
                        <Motion.div
                            key={id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            className="shadow-md shadow-cyan-500/20 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 flex flex-col hover:border-cyan-500/50 transition-all duration-300"
                        >
                            {/* Image area */}
                            <div className="h-48 w-full relative group overflow-hidden">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center p-4">
                                        <span className="text-2xl font-bold text-gray-300 group-hover:scale-110 duration-300">{title}</span>
                                    </div>
                                )}
                                <span className="text-sm text-gray-400 absolute bottom-2 right-2 border border-gray-500/50 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">{date}</span>
                            </div>

                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-primary">{title}</h3>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">{subtitle}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
                                    <p className="text-accent text-xs font-mono mb-4 break-words">{stack}</p>
                                </div>
                                <div className="flex items-center justify-start gap-4">
                                    <a href={demo} target='_blank' rel="noreferrer" className="w-1/2 px-4 py-2 bg-gray-700 hover:bg-primary duration-300 rounded-lg text-center font-medium">Demo</a>
                                    <a href={code} target='_blank' rel="noreferrer" download={isDownload} className="w-1/2 px-4 py-2 bg-gray-700 hover:bg-primary duration-300 rounded-lg text-center font-medium">{isDownload ? 'Download' : 'Code'}</a>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
