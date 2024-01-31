// components/Home.js
import React from 'react';
import './styles.css';
import { CgWebsite } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";

const Projects = () => {
    // Add the content of the home section here
    const title = "Projects"; // Replace with the actual name
    return (
        <div id='projects' className='title flex lg:flex-row flex-col max-w-7xl mx-auto lg:px-6 md:px-12'>
            <div className='flex flex-col lg:w-[30%] py-8 pl-4'>
                <div className='lg:text-[46px] text-[36px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 lg:w-[70%] space-y-20'>
                {/* EcoScan */}
                <div className='flex lg:flex-row md:flex-row flex-col mt-8'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/ecoscan.png`)}
                                alt="EcoScan Project"
                                className="lg:object-cover lg:w-96 lg:h-80 md:object-cover md:w-80 md:h-80 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col lg:ml-8 md:ml-4 lg:w-[50%] md:w-[50%]'>
                        <span className='title-black pb-2 lg:text-[36px] text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                                EcoScan
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px] pb-4'>
                            EcoScan uses data scraped from Amazon to assess the environmental impact of products,
                            presenting key details like material composition and impacts from manufacturing and shipping.
                        </span>
                        <span className='flex lg:flex-row md:flex-col normal text-stone-500 text-[14px] lg:gap-4 md:gap-0 gap-2'>
                            <div>React.js</div>
                            <div>Tailwind CSS</div>
                            <div>Flask</div>
                            <div>Firebase</div>
                            <div>Open AI</div>
                        </span>
                    </div>
                </div>
                {/* EduTrade */}
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/EduTrade" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/edutrade.png`)}
                                alt="EduTrade Project"
                                className="lg:object-cover lg:w-96 lg:h-80 md:object-cover md:w-80 md:h-80 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col lg:ml-8 md:ml-4 lg:w-[50%] md:w-[50%]'>
                        <span className='title-black pb-2 lg:text-[36px] text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EduTrade" target="_blank" rel="noopener noreferrer">
                                EduTrade
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px] pb-4'>
                            A platform for students to share or sell their used school supplies locally. Users can create listings,
                            engage in private chats, participate in discussions, and search for items based on location.
                        </span>
                        <span className='flex lg:flex-row md:flex-col normal text-stone-500 text-[14px] lg:gap-4 md:gap-0 gap-2'>
                            <div>React.js</div>
                            <div>Tailwind CSS</div>
                            <div>Firebase</div>
                        </span>
                        <a href="https://jeffuz.github.io/EduTrade/" target="_blank" rel="noopener noreferrer">
                            <CgWebsite size={36} className='mt-6 text-pink-950 icon-link icon-link:hover' />
                        </a>
                    </div>
                </div>
                {/* FitFlow */}
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/fitflow.png`)}
                                alt="FitFlow Project"
                                className="lg:object-cover lg:w-96 lg:h-80 md:object-cover md:w-80 md:h-80 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col lg:ml-8 md:ml-4 lg:w-[50%] md:w-[50%]'>
                        <span className='title-black pb-2 lg:text-[36px] text-[28px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                                FitFlow
                            </a>
                        </span>
                        <span className='normal lg:text-[18px] text-[16px]  pb-4'>
                            A website that uses the OpenAI api to generate customized workouts, nutrtion and exercise recommendation.
                            Users fill out a questionnaire that asks them various questions, about goals, lifestyle, and what they are aiming for.
                        </span>
                        <span className='flex lg:flex-row md:flex-col normal text-stone-500 text-[14px] lg:gap-4 md:gap-0 gap-2'>
                            <div>React.js</div>
                            <div>Tailwind CSS</div>
                            <div>Flask</div>
                            <div>MongoDB</div>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
