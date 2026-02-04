import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaLaptopCode size={50} className="text-cyan-400" />,
            title: "Web Development",
            description: "Building responsive, modern, and high-performance websites using React, Tailwind CSS, and modern JavaScript frameworks."
        },
        {
            id: 2,
            icon: <FaServer size={50} className="text-cyan-400" />,
            title: "Backend Development",
            description: "Creating robust and scalable server-side logic and RESTful APIs using Node.js, Express, and ASP.NET."
        },
        {
            id: 3,
            icon: <FaDatabase size={50} className="text-cyan-400" />,
            title: "Database Management",
            description: "Designing and managing efficient SQL (MySQL) and NoSQL (MongoDB) databases for data integrity and performance."
        },
        {
            id: 4,
            icon: <FaLaptopCode size={50} className="text-cyan-400" />, // Using FaLaptopCode as placeholder or find IoT specific
            title: "IoT Solutions",
            description: "Designing IoT systems with real-time monitoring and automated emergency responses using Arduino and various sensors."
        },
        {
            id: 5,
            icon: <FaServer size={50} className="text-cyan-400" />,
            title: "Cloud & DevOps",
            description: "Deploying applications on cloud servers, managing Linux environments, and automating builds with Jenkins and Docker."
        },
        {
            id: 6,
            icon: <FaDatabase size={50} className="text-cyan-400" />,
            title: "Data Analytics",
            description: "Processing complex datasets and building interactive dashboards using Tableau and Celonis for business optimization."
        }
    ];

    return (

        <div
            id="services"
            className="w-full min-h-screen bg-black text-white py-20 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/10 to-black z-0 pointer-events-none"></div>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8 text-left">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">
                        Services
                    </p>
                    <p className="py-6 text-gray-400">Comprehensive technology solutions</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
                    {services.map(({ id, icon, title, description }) => (
                        <div key={id} className="shadow-lg shadow-cyan-500/10 rounded-lg p-6 duration-200 hover:scale-105 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 group flex flex-col items-center text-center">
                            <div className="mb-4 group-hover:scale-110 duration-300">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
