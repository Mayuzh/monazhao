// components/Home.js
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiDevpost } from "react-icons/si";

const Home = () => {
    // Add the content of the home section here
    const name = "Yumeng Zhao"; // Replace with the actual name
    const major = "Master Student";
    const college = "UC Santa Cruz";
    const selfIntro2 = "My current research focuses on developing and comparing different machine learning models for the purpose of extracting shorelines from video frames, which can be applied in environmental monitoring and coastal management."
    const selfIntro3 = "I am also enthusiastic about full-stack development, using modern tools to create websites and software. My passion lies in crafting seamless and user-friendly digital experiences by employing the latest development technologies.";
    return (
        <div id='home' className='flex lg:flex-row flex-col max-w-7xl mx-auto mt-20 lg:px-6 md:px-12'>
            <div className='flex flex-col lg:w-[30%] py-8 px-2'>
                <img src={require(`../images/mona.jpg`)} alt="Profile Photo" className="w-52 rounded-full mx-auto" />
                <div className='title flex flex-col text-center mt-4 leading-none'>
                    <div className="lg:text-[38px] text-[28px] px-4 py-2">{name}</div>
                    <div className="lg:text-[22px] text-[16px] text-stone-500 my-3">{major}</div>
                    <div className="lg:text-[22px] text-[16px] text-stone-500">{college}</div>
                    <div className='flex justify-center space-x-4 mt-9'>
                        <MdEmail size={36} className='text-pink-950 icon-link icon-link:hover' />
                        <a href="https://www.linkedin.com/in/monazhao417/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={36} className='text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://github.com/Mayuzh" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className='text-pink-950 icon-link icon-link:hover' />
                        </a>
                        <a href="https://devpost.com/monazhao59" target="_blank" rel="noopener noreferrer">
                            <SiDevpost size={36} className='text-pink-950 icon-link icon-link:hover' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col p-4 lg:w-[70%] space-y-6 leading-relaxed'>
                <span className='normal lg:text-[21px] text-[16px]'>
                    Hello, I'm Mona! I am a master student in&nbsp;
                    <a className='text-pink-950 hover:underline' href="https://engineering.ucsc.edu/departments/computer-science-and-engineering/" target="_blank" rel="noopener noreferrer">
                        Computer Science and Engineering
                    </a>
                    &nbsp;at&nbsp;
                    <a className='text-pink-950 hover:underline' href="https://www.ucsc.edu/" target="_blank" rel="noopener noreferrer">
                        UC Santa Cruz.
                    </a>
                    &nbsp;I am currently working as a Graduate Student Researcher (GSR) at the UCSC Advanced Visualization and Interactive Systems (AVIS) Lab advised by Professor Alex Pang.
                </span>

                <span className='normal lg:text-[21px] text-[16px]'>{selfIntro2}</span>
                <span className='normal lg:text-[21px] text-[16px]'>{selfIntro3}</span>
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <div className="lg:w-[60%] md:w-[50%] flex flex-col">
                        <div className="title-black lg:text-[24px] text-[21px] my-4">Education</div>
                        <div className='normal flex flex-row mb-2'>
                            <FaGraduationCap size={28} className='mr-5 text-pink-950' />
                            <div className='flex flex-col '>
                                <span className='lg:text-[20px] text-[16px]'>M.S. in Computer Science and Engineering</span>
                                <span className='text-stone-500 lg:text-base text-[14px]'>2023 - 2024</span>
                                <span className='text-stone-500 lg:text-base text-[14px]'>UC Santa Cruz</span>
                            </div>
                        </div>
                        <div className='normal flex flex-row'>
                            <FaGraduationCap size={28} className='mr-5 text-pink-950' />
                            <div className='flex flex-col'>
                                <span className='lg:text-[20px] text-[16px]'>B.S. in Computer Science</span>
                                <span className='text-stone-500 lg:text-base text-[14px]'>2019 - 2023</span>
                                <span className='text-stone-500 lg:text-base text-[14px]'>UC Santa Cruz</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[40%] md:w-[50%] flex flex-col lg:text-[20px] text-[16px]">
                        <div className="title-black lg:text-[24px] text-[21px] my-4">Interests</div>
                        <div className='normal flex flex-row mb-2'>
                            <GiFallingStar size={24} className='mr-5 text-pink-950' />
                            <div className=''>
                                Machine Learning
                            </div>
                        </div>
                        <div className='normal flex flex-row mb-2'>
                            <GiFallingStar size={24} className='mr-5 text-pink-950' />
                            <div className=''>
                                Computer Vision
                            </div>
                        </div>
                        <div className='normal flex flex-row mb-2'>
                            <GiFallingStar size={24} className='mr-5 text-pink-950' />
                            <div className=''>
                                Computer Graphics
                            </div>
                        </div>
                        <div className='normal flex flex-row mb-2'>
                            <GiFallingStar size={24} className='mr-5 text-pink-950' />
                            <div className=''>
                                Web Development
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
