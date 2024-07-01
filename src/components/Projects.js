// components/Home.js
import React from 'react';
import './styles.css';
import { CgWebsite } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    // Add the content of the home section here
    const title = "Projects"; // Replace with the actual name
    return (
        <div id='projects' className='title flex lg:flex-row flex-col max-w-7xl mx-auto lg:px-6 md:px-12'>
            <div className='flex flex-col lg:w-[30%] py-8 pl-4'>
                <div className='lg:text-[46px] text-[36px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 lg:w-[70%] space-y-16'>
                {/* Eyes2Ears */}
                <div className='flex flex-col lg:mt-8'>
                    <div className='flex flex-col'>
                        <span className='title-black pb-2 text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/Eyes2Ears" target="_blank" rel="noopener noreferrer">
                                Eyes2Ears
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px]'>
                        Eyes2Ears is a mobile application designed to assist visually impaired individuals by utilizing advanced AI technologies. 
                        The app allows users to capture images using their smartphone camera, 
                        which are then processed in real-time to provide audio descriptions of their surroundings.
                        </span>
                        <span className='flex flex-row normal text-[14px] text-pink-950 gap-2 pt-2'>
                            <div className="rounded-full bg-pink-50 px-3 py-1">React Native</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Expo</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">OpenAI</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Firebase</div>
                        </span>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className='my-2 text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://github.com/Jeffuz/Eyes2Ears" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/Eyes2Ears.png`)}
                                alt="Eyes2Ears Project"
                                className="md:object-cover md:w-3/4"
                            />
                        </a>
                    </div>
                </div>              
                {/* EcoScan */}
                <div className='flex flex-col lg:mt-8'>
                    <div className='flex flex-col'>
                        <span className='title-black pb-2 text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                                EcoScan
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px]'>
                            EcoScan uses data scraped from Amazon to assess the environmental impact of products,
                            presenting key details like material composition and impacts from manufacturing and shipping.
                        </span>
                        <span className='flex flex-row normal text-[14px] text-pink-950 gap-2 pt-2'>
                            <button disabled className="rounded-full bg-pink-50 px-3 py-1">React.js</button>
                            <button disabled className="rounded-full bg-pink-50 px-3 py-1">Tailwind CSS</button>
                            <button disabled className="rounded-full bg-pink-50 px-3 py-1">Flask</button>
                            <button disabled className="rounded-full bg-pink-50 px-3 py-1">Firebase</button>
                            <button disabled className="rounded-full bg-pink-50 px-3 py-1">Open AI</button>
                        </span>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className='my-2 text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/ecoscan.png`)}
                                alt="EcoScan Project"
                                className="md:object-cover md:w-3/4"
                            />
                        </a>
                    </div>
                </div>
                {/* EduTrade */}
                <div className='flex flex-col mt-8'>
                    <div className='flex flex-col'>
                        <span className='title-black pb-2 text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                                EduTrade
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px]'>
                            A platform for students to share or sell their used school supplies locally. Users can create listings,
                            engage in private chats, participate in discussions, and search for items based on location.
                        </span>
                        <span className='flex flex-row normal text-[14px] text-pink-950 gap-2 pt-2'>
                            <div className="rounded-full bg-pink-50 px-3 py-1">React.js</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Tailwind CSS</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Firebase</div>
                        </span>
                        <a href="https://jeffuz.github.io/EduTrade/" target="_blank" rel="noopener noreferrer">
                            <CgWebsite size={36} className='my-2 text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/edutrade.png`)}
                                alt="EduTrade Project"
                                className="md:object-cover md:w-3/4"
                            />
                        </a>
                    </div>
                </div>
                {/* FitFlow */}
                <div className='flex flex-col mt-8'>
                    <div className='flex flex-col'>
                        <span className='title-black pb-2 text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                                EduTrade
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px]'>
                            A website that uses the OpenAI api to generate customized workouts, nutrtion and exercise recommendation.
                            Users fill out a questionnaire that asks them various questions, about goals, lifestyle, and what they are aiming for.
                        </span>
                        <span className='flex flex-row normal text-[14px] text-pink-950 gap-2 pt-2'>
                            <div className="rounded-full bg-pink-50 px-3 py-1">React.js</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Tailwind CSS</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">Flask</div>
                            <div className="rounded-full bg-pink-50 px-3 py-1">MongoDB</div>
                        </span>
                        <a href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className='my-2 text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images//fitflow.png`)}
                                alt="EduTrade Project"
                                className="md:object-cover md:w-3/4"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
