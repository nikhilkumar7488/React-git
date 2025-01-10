import React from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import proj1 from "../assets/images/Tripify.jpg";
import proj2 from "../assets/images/stayhub.png";
import proj3 from "../assets/images/portfolio.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { div } from 'framer-motion/client';


const projects = [

    {
        title:"Tripify Website",
        desc: "Tripify is an innovative and user-friendly online platform designed to make travel planning and booking a seamless experience. Whether you're looking to explore new destinations, rent vehicles, or book mess food for your journey, Tripify has you covered.",
        devstack: "Html, Css, JavaScript, Php",
        link: "#",
        git: "#",
        src: proj1,
        type: "fullstack",
    },

    {
        title:"Stay Hub Website",
        desc: "Stay Hub is an all-in-one platform designed to simplify your search for temporary accommodation, vehicle rentals, and mess food services. Whether you’re a traveler, student, or someone looking for convenience, Stay Hub provides everything you need in one place to make your stay comfortable and stress-free.",
        devstack: "React,Html,Css,JavaScript",
        link: "#",
        git: "#",
        src: proj2,
        type: "fullstack",
    },

    {
        title:"Personal Portfolio Website",
        desc: "Welcome to my Personal Portfolio Website—a digital showcase of my skills, projects, and professional journey. As a passionate and dedicated full-stack developer, this portfolio highlights my expertise in creating user-centric websites and applications with a focus on design, functionality, and seamless user experiences.",
        devstack: "MongoDb, Express, React, Node.js",
        link: "#",
        git: "#",
        src: proj3,
        type: "fullstack",
    },
];




export const Portfolio = () =>{
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div className="text-white py-24 md:py-64" id="portfolio">
            <div className="container mx-auto px-">
                <h2 className="text-6xl font-bold text-center mb-16">
                    Selected  <span className="text-emerald-300">Projects</span>
                </h2>

                <div className="space-y-8">
                    {projects.map((project,index)=> (
                        <motion.div
                         key={index}
                         initial={{opacity:0, y:20}}
                         whileInView={{opacity:1, y:0}}
                         viewport={{once: true}}
                         transition={{duration: 0.5, delay: index * 0.1}}
                         className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        > 
                        
                        <div className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                        onClick={() => toggleExpand(index)}>

                            <h3 className="text-4xl font-semibold">{project.title}</h3>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-light text-emerald-300">
                                    0{index + 1}
                                </span>
                                <FiChevronDown
                                 className={`w-6 h-6 transform transition-transform ${
                                    expandedIndex === index ? "rotate-180" : ""
                                 }`}
                                />

                            </div>
                        </div>
                        <AnimatePresence>
                            {expandedIndex === index &&(
                                <motion.div
                                initial = {{ height: 0, opacity:0}}
                                animate= {{height: "auto", opacity:1 }}
                                exit = {{height: 0, opacity: 0}}
                                transition={{duration: 0.3}}
                                className="px-6 pb-6 bg-black/20 border border-white/10"
                                >

                                <div className="flex flex-col md:flex-row gap-8">

                                    <img 
                                    src= {project.src}
                                     alt={project.title}
                                     className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                                     <div className="flex-1">
                                        <p className="text-white/70 mb-4">{project.desc}</p>
                                        <p className="text-emerald-300 font-medium mb-2">
                                            Stack: {project.devstack}
                                        </p>
                                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                                            Type: {project.type}
                                        </p>
                                        <div className="flex justify-start items-center space-x-4">
                                            <a href={project.link}
                                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                                            >
                                                <HiOutlineExternalLink />
                                            </a>
                                            <a href={project.git}
                                            className="text-gray-400 hover:text-gray-300 transition-colors"
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                     </div>
                                </div>


                                </motion.div>
                            )}
                        </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
