// components/Home.js
import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

const Experiences = () => {
    // Add the content of the home section here
    const title = "Experiences"; // Replace with the actual name
    return (
        <div id='experiences' className='title flex flex-row max-w-7xl mx-auto px-6'>
            <div className='flex flex-col w-[30%] py-8 pl-4'>
                <div className='text-[46px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 w-[70%] space-y-6 leading-loose'>
                <div className='flex flex-col mt-8 space-y-6'>
                    <div className='normal flex flex-row'>
                        <MdComputer size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='text-[30px]'>Research</span>
                            <span className='text-stone-500 text-base'>UC Santa Cruz</span>
                            <span className='text-[21px]'>Undergraduate Research Intern</span>
                            <span className='text-[21px]'>Graduate Student Researcher</span>
                        </div>
                    </div>
                    <div className='normal flex flex-row'>
                        <IoCodeWorkingSharp size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='text-[30px]'>Software Developer</span>
                            <span className='text-stone-500 text-base'>CITRIS and the Banatao Institute - CITRIS Workforce Innovation</span>
                            <span className='text-[21px]'>RoboticsCats</span>
                        </div>
                    </div>
                    <div className='normal flex flex-row'>
                        <FaChalkboardTeacher size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='text-[30px]'>Group Tutor and Reader</span>
                            <span className='text-stone-500 text-base'>UC Santa Cruz</span>
                            <span className='text-[21px]'>CSE 30 (Programming Abstractions: Python)</span>
                            <span className='text-[21px]'>CSE 101 (Introduction to Data Structures and Algorithms)</span>
                            <span className='text-[21px]'>CSE 144 (Applied Machine Learning: Deep Learning)</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Experiences;
