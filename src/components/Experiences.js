// components/Home.js
import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";

const Experiences = () => {
    // Add the content of the home section here
    const title = "Experiences"; // Replace with the actual name
    return (
        <div id='experiences' className='title flex flex-row max-w-7xl mx-auto px-6'>
            <div className='flex flex-col w-[30%] py-8 pl-4'>
                <div className='text-[50px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 w-[70%] space-y-6 leading-relaxed'>
                <div className='flex flex-col'>
                    <div className='normal flex flex-row'>
                        <FaChalkboardTeacher size={28} className='mr-5 mt-3 text-pink-950' />
                        <div className='flex flex-col'>
                            <span className='text-[30px]'>Tutor</span>
                            <span className='text-stone-500 text-base'>UC Santa Cruz</span>
                            <span className='text-[21px]'>CSE30, CSE101, CSE144</span>
                           
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Experiences;
