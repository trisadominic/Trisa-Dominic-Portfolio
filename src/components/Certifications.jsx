import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const Certifications = () => {
    const certs = [
        {
            id: 1,
            name: "Foundational C# with Microsoft",
            issuer: "freeCodeCamp",
            date: "Nov 2025",
            id_val: "fcc-b7e43723-3025-485c-aa6f-a97b41ab6451-fcswm",
            url: "https://freecodecamp.org/certification/fcc-b7e43723-3025-485c-aa6f-a97b41ab6451/foundational-c-sharp-with-microsoft",
            icon: <FaAward size={30} className="text-cyan-400" />
        },
        {
            id: 2,
            name: "Python for Data Science",
            issuer: "Indian Institute of Technology, Madras",
            date: "July 2023",
            id_val: "NPTEL23CS99S34740544",
            url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS99S3474054410005748",
            icon: <FaCertificate size={30} className="text-cyan-400" />
        },
        {
            id: 3,
            name: "Qlik Sense Business Analyst Qualification",
            issuer: "Qlik",
            date: "June 2023",
            url: "https://www.credly.com/go/cQy1GFun",
            icon: <FaAward size={30} className="text-cyan-400" />
        },
        {
            id: 4,
            name: "Introduction to Data Analysis using Microsoft Excel",
            issuer: "Coursera",
            date: "Nov 2023",
            url: "https://coursera.org/verify/DTQ3J3XBCGD7",
            icon: <FaCertificate size={30} className="text-cyan-400" />
        },
        {
            id: 5,
            name: "Introduction to MongoDB",
            issuer: "MongoDB",
            date: "Jan 2024",
            id_val: "MDBajs59hm6zl",
            url: "https://learn.mongodb.com/c/tAqGBaZMQbSV1aKL1lmOkw",
            icon: <FaAward size={30} className="text-cyan-400" />
        }
    ];

    return (

        <div id="certifications" className="w-full min-h-screen bg-black py-20 relative overflow-hidden text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/10 to-black z-0 pointer-events-none"></div>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">Certifications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {certs.map(({ id, name, issuer, date, id_val, url, icon }) => (
                        <Motion.a
                            key={id}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col items-center text-center hover:shadow-cyan-500/20 hover:border-cyan-500/50 duration-300 backdrop-blur-sm group"
                        >
                            <div className="mb-4 bg-gray-900 p-4 rounded-full border border-gray-700 shadow-inner group-hover:border-cyan-500/50 transition-all">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{name}</h3>
                            <p className="text-cyan-400 font-semibold mb-1">{issuer}</p>
                            <p className="text-gray-500 text-sm">{date}</p>
                            {id_val && (
                                <p className="text-gray-600 text-xs mt-4 font-mono">ID: {id_val}</p>
                            )}
                            <div className="mt-4 text-cyan-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                View Credential →
                            </div>
                        </Motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
