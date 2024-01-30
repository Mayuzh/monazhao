// components/Home.js
import React from 'react';

const Contact = () => {
    // Add the content of the home section here
    const title = "Contact"; // Replace with the actual name
    return (
        <div id='contact' className='flex lg:flex-row md:flex-row flex-col max-w-7xl mx-auto lg:px-6 md:px-12'>
            <div className='title flex flex-col w-[30%] lg:py-8 md:py-12 pl-4'>
               <div className='lg:text-[46px] text-[36px]'>{title}</div>
            </div>

            <div className='normal flex flex-col px-4 lg:py-12 md:py-16 py-4 lg:w-[70%] space-y-6 leading-relaxed'>
                <div className='title lg:text-[28px]'>yzhao172 @ ucsc.edu</div>
            </div>
        </div>
    );
};

export default Contact;