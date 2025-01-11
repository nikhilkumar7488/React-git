import React from 'react';
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { FiMail, FiPhoneCall } from 'react-icons/fi';

export const Footer = () => {
    return (
        <footer className="py-8" id="contact">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Top Section */}
                <div className="flex items-center justify-between flex-col md:flex-row">
                    <div>
                        <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
                            Get in <span className="text-gray-400">touch</span>
                        </h2>
                        <a
                            className="text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
                            href="mailto:nikhilkrsingh2003@gmail.com"
                        >
                            Nikhilkrsingh2003@gmail.com
                        </a>
                    </div>

                    <div className="text-white/50 mt-12">
                        <div className="mb-8">
                            <p className="text-lg mb-1">Phone</p>
                            <a
                                href="tel:7488892490"
                                className="text-xl md:text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300"
                            >
                                7488892490
                            </a>
                        </div>
                        <div className="text-lg mb-8">
                            <p className="font-bold">Home</p>
                            <p>Bihar</p>
                            <p>Muzaffarpur</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>

                {/* Large Background Text */}
                <div className="relative z-10 text-center mt-8 py-12">
                    <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
                        Nikhil
                    </h1>
                    <h1 className="md:hidden text-9xl font-bold text-white opacity-10">
                        Nikhil
                    </h1>
                </div>

                {/* Footer Bottom Section */}
                <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                    <p className="text-gray-200 caption text-n-4 lg:block">
                        All rights reserved @Nikhil
                    </p>

                    <ul className="flex gap-5 flex-wrap">
                        <a
                            href="tel:7488892490"
                            aria-label="Phone"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <FiPhoneCall size={30} />
                        </a>
                        <a
                            href="mailto:nikhilkrsingh2003@gmail.com"
                            aria-label="Gmail"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <FiMail size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nikhil9661/"
                            aria-label="LinkedIn"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://github.com/nikhilkumar7488"
                            aria-label="GitHub"
                            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
                        >
                            <FaGithub size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
