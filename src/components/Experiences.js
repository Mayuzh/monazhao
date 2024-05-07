// components/Home.js
import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

const Experiences = () => {
    // Add the content of the home section here
    const title = "Experiences"; // Replace with the actual name
    return (
        <div id='experiences' className='title flex lg:flex-row flex-col max-w-7xl mx-auto lg:px-6 md:px-12'>
            <div className='flex flex-col lg:w-[30%] lg:py-8 pl-4'>
                <div className='lg:text-[46px] text-[36px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 lg:w-[70%] space-y-6 leading-loose'>
                <div className='flex flex-col lg:mt-8 space-y-6'>
                    <div className='normal flex flex-row'>
                        <MdComputer size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='title lg:text-[30px] text-[24px]'>Researcher</span>
                            <span className='text-stone-500 text-base'>Advanced Visualization and Interactive Systems Lab at UC Santa Cruz</span>
                            <span className='lg:text-[21px] text-[16px]'>Undergraduate Research Intern</span>
                            <span className='lg:text-[21px] text-[16px]'>Graduate Student Researcher(GSR)</span>
                        </div>
                    </div>
                    <div className='normal flex flex-row'>
                        <IoCodeWorkingSharp size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='title lg:text-[30px] text-[24px]'>Software Developer</span>
                            <span className='text-stone-500 text-base'>CITRIS and the Banatao Institute - RoboticsCats</span>
                            <span className='lg:text-[21px] text-[16px]'>CITRIS Workforce Innovation Intern</span>
                        </div>
                    </div>
                    <div className='normal flex flex-row'>
                        <FaChalkboardTeacher size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='title lg:text-[30px] text-[24px]'>Teaching Assistant</span>
                            <span className='text-stone-500 text-base'>Baskin Engineering at UC Santa Cruz</span>
                            <span className='lg:text-[21px] text-[16px]'>CSE 115a (Introduction to Software Engineering)</span>
                        </div>
                    </div>
                    <div className='normal flex flex-row'>
                        <FaChalkboardTeacher size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='title lg:text-[30px] text-[24px]'>Group Tutor and Reader</span>
                            <span className='text-stone-500 text-base'>Baskin Engineering at UC Santa Cruz</span>
                            <span className='lg:text-[21px] text-[16px]'>CSE 30 (Programming Abstractions: Python)</span>
                            <span className='lg:text-[21px] text-[16px]'>CSE 101 (Introduction to Data Structures and Algorithms)</span>
                            <span className='lg:text-[21px] text-[16px]'>CSE 144 (Applied Machine Learning: Deep Learning)</span>
                            <span className='lg:text-[21px] text-[16px]'>CSE182 (Introduction to Database Management Systems)</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Experiences;
