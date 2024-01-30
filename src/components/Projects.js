// components/Home.js
import React from 'react';
import './styles.css';
import { CgWebsite } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";

const Projects = () => {
    // Add the content of the home section here
    const title = "Projects"; // Replace with the actual name
    return (
        <div id='projects' className='title flex flex-row max-w-7xl mx-auto px-6'>
            <div className='flex flex-col w-[30%] py-8 pl-4'>
                <div className='text-[46px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 w-[70%] space-y-20'>
                {/* EcoScan */}
                <div className='flex flex-row mt-8'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/ecoscan.png`)}
                                alt="EcoScan Project"
                                className="object-cover h-80 w-96 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col ml-8 w-[50%]'>
                        <span className='title-black pb-2 text-[36px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EcoScan" target="_blank" rel="noopener noreferrer">
                                EcoScan
                            </a>
                        </span>
                        <span className='normal text-[20px] pb-4'>
                            EcoScan uses data scraped from Amazon to assess the environmental impact of products,
                            presenting key details like material composition and impacts from manufacturing and shipping.
                        </span>
                        <span className='flex flex-row normal text-stone-500 text-[16px] gap-6'>
                            <div>React.js</div>
                            <div>Tailwind CSS</div>
                            <div>Flask</div>
                            <div>Firebase</div>
                            <div>Open AI</div>
                        </span>
                    </div>
                </div>
                {/* EduTrade */}
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/EduTrade" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/edutrade.png`)}
                                alt="EduTrade Project"
                                className="object-cover h-80 w-96 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col ml-8 w-[50%]'>
                        <span className='title-black pb-2 text-[36px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/EduTrade" target="_blank" rel="noopener noreferrer">
                                EduTrade
                            </a>
                        </span>
                        <span className='normal text-[20px] pb-4'>
                            A platform for students to share or sell their used school supplies locally. Users can create listings,
                            engage in private chats, participate in discussions, and search for items based on location.
                        </span>
                        <span className='flex flex-row normal text-stone-500 text-[16px] gap-6'>
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
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <a href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                            <img
                                src={require(`../images/fitflow.png`)}
                                alt="FitFlow Project"
                                className="object-cover h-80 w-96 mx-auto"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col ml-8 w-[50%]'>
                        <span className='title-black pb-2 text-[36px]'>
                            <a className='hover:text-pink-950 hover:underline' href="https://github.com/Jeffuz/FitFlow" target="_blank" rel="noopener noreferrer">
                                FitFlow
                            </a>
                        </span>
                        <span className='normal text-[20px] pb-4'>
                            A website that uses the OpenAI api to generate customized workouts, nutrtion and exercise recommendation.
                            Users fill out a questionnaire that asks them various questions, about goals, lifestyle, and what they are aiming for.
                        </span>
                        <span className='flex flex-row normal text-stone-500 text-[16px] gap-6'>
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
