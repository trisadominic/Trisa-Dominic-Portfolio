import React from 'react';

// Import images
import sjuImg from '../assets/College1.jpg';
import kristuImg from '../assets/College2.jpg';
import gvhssImg from '../assets/School1.jpeg';

const Education = () => {
    const education = [
        {
            id: 1,
            institution: "St Joseph's University, Bengaluru",
            degree: "Pursuing MCA",
            score: "78.5%",
            year: "(2024 - 2026)",
            image: sjuImg,
            link: "https://www.sju.edu.in/"
        },
        {
            id: 2,
            institution: "Kristu Jayanti (Deemed to be University)",
            degree: "BCA",
            score: "75.42%",
            year: "(2021 - 2024)",
            image: kristuImg,
            link: "https://kristujayanti.edu.in/"
        },
        {
            id: 3,
            institution: "GVHSS Kurumathur, Kannur",
            degree: "HSC",
            score: "87.33%",
            year: "(2019 - 2021)",
            image: gvhssImg,
            link: "#"
        },
        {
            id: 4,
            institution: "Maryland High School Madampam, Kannur",
            degree: "SSLC",
            score: "85%",
            year: "(2018 - 2019)",
            image: null,
            link: "#"
        },
    ];

    return (
        <div
            id="education"
            className="bg-black w-full min-h-screen py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
                        Education
                    </p>
                    <p className="py-6 text-gray-400">My academic journey</p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
                    {education.map(({ id, institution, degree, score, year, image, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="group shadow-md shadow-cyan-500/10 hover:scale-[1.02] duration-500 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="h-40 w-full relative overflow-hidden bg-gray-800">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={institution}
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500 opacity-60 group-hover:opacity-100 transition-all"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-4xl text-gray-700 font-bold opacity-20">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>

                            <div className="p-6 pt-0 -mt-8 relative z-10 flex-grow">
                                <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{degree}</h3>
                                <p className="mt-2 text-lg font-medium">{institution}</p>
                                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                                    <span className="bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">Score: {score}</span>
                                    <span className="bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">{year}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
