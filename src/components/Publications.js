// components/Home.js
import React from 'react';

const Publications = () => {
    // Add the content of the home section here
    const title = "Publications"; // Replace with the actual name
    return (
        <div id='publications' className='title flex lg:flex-row flex-col max-w-7xl mx-auto lg:px-6 md:px-12'>
            <div className='flex flex-col lg:w-[30%] lg:py-8 pl-4'>
                <div className='lg:text-[46px] text-[36px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 lg:w-[70%] space-y-6 leading-relaxed'>
                <div className='flex flex-col lg:mt-8'>
                    <span className='title-black lg:text-[30px] text-[19px]hover:underline'>
                        <a href="https://ieeexplore.ieee.org/document/10041994" target="_blank" rel="noopener noreferrer">
                            RipViz: Finding Rip Currents by Learning Pathline Behavior
                        </a>
                    </span>
                    <span className='normal lg:text-[16px] text-[12px] pb-4'>We present a hybrid machine learning and flow analysis feature detection method, RipViz, to extract rip currents from stationary videos. Rip currents are dangerous strong currents that can drag beachgoers out to sea. Most people are either unaware of them or do not know what they look like. In some... </span>
                    <span className='normal text-stone-500 text-[14px]'>Akila de Silva, Mona Zhao, Donald Stewart, Fahim Hasan, Gregory Dusek, James Davis, Alex Pang</span>
                    <span className='normal text-stone-500 text-[14px]'>February 2023  - IEEE</span>
                </div>
            </div>
        </div>
    );
};

export default Publications;