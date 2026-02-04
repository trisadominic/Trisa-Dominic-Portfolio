import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaChartLine, FaFileExcel } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiDotnet, SiTableau, SiGoogle, SiDocker, SiJenkins, SiGit, SiLinux } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { motion as Motion } from 'framer-motion';

const Skills = () => {
    // Categorized skills
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { id: 1, src: <FaPython size={40} className="text-yellow-400" />, title: 'Python', style: 'shadow-yellow-400' },
                { id: 2, src: <TbBrandCSharp size={40} className="text-purple-600" />, title: 'C#', style: 'shadow-purple-600' },
                { id: 3, src: <FaJs size={40} className="text-yellow-500" />, title: 'JavaScript', style: 'shadow-yellow-500' },
            ]
        },
        {
            title: "Web & Backend",
            skills: [
                { id: 4, src: <FaHtml5 size={40} className="text-orange-500" />, title: 'HTML', style: 'shadow-orange-500' },
                { id: 5, src: <FaCss3Alt size={40} className="text-blue-500" />, title: 'CSS', style: 'shadow-blue-500' },
                { id: 6, src: <SiTailwindcss size={40} className="text-sky-400" />, title: 'Tailwind', style: 'shadow-sky-400' },
                { id: 7, src: <FaReact size={40} className="text-blue-600" />, title: 'React', style: 'shadow-blue-600' },
                { id: 8, src: <FaNodeJs size={40} className="text-green-500" />, title: 'Node.js', style: 'shadow-green-500' },
                { id: 9, src: <SiDotnet size={40} className="text-purple-400" />, title: 'ASP.NET', style: 'shadow-purple-400' },
            ]
        },
        {
            title: "Databases",
            skills: [
                { id: 10, src: <SiMongodb size={40} className="text-green-400" />, title: 'MongoDB', style: 'shadow-green-400' },
                { id: 11, src: <SiMysql size={40} className="text-blue-400" />, title: 'MySQL', style: 'shadow-blue-400' },
            ]
        },
        {
            title: "Data & Analytics",
            skills: [
                { id: 12, src: <SiTableau size={40} className="text-blue-800" />, title: 'Tableau', style: 'shadow-blue-800' },
                { id: 13, src: <FaChartLine size={40} className="text-orange-600" />, title: 'Celonis', style: 'shadow-orange-600' },
                { id: 14, src: <SiGoogle size={40} className="text-green-500" />, title: 'Sheets', style: 'shadow-green-500' },
                { id: 19, src: <FaFileExcel size={40} className="text-green-600" />, title: 'Excel', style: 'shadow-green-600' },
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { id: 15, src: <SiGit size={40} className="text-orange-600" />, title: 'Git', style: 'shadow-orange-600' },
                { id: 16, src: <SiDocker size={40} className="text-blue-500" />, title: 'Docker', style: 'shadow-blue-500' },
                { id: 17, src: <SiJenkins size={40} className="text-gray-300" />, title: 'Jenkins', style: 'shadow-gray-300' },
                { id: 18, src: <SiLinux size={40} className="text-yellow-600" />, title: 'Linux', style: 'shadow-yellow-600' },
            ]
        },
    ];

    return (

        <div
            id="skills"
            className="w-full min-h-screen bg-black py-20 relative overflow-hidden text-white"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30454.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-blue-900/10 to-black z-0 pointer-events-none"></div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
                        Skills & Expertise
                    </p>
                    <p className="py-6 text-gray-400">Technologies I work with</p>
                </div>

                <div className="flex flex-col gap-10">
                    {categories.map((cat, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold mb-6 text-cyan-400 border-l-4 border-cyan-500 pl-3">{cat.title}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                                {cat.skills.map(({ id, src, title, style }) => (
                                    <Motion.div
                                        key={id}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.4, delay: id * 0.05 }}
                                        className={`shadow-lg hover:shadow-cyan-500/50 py-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${style}`}
                                    >
                                        <div className="flex justify-center">{src}</div>
                                        <p className="mt-4 font-semibold text-gray-300">{title}</p>
                                    </Motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
