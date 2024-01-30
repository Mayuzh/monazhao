// components/Home.js
import React from 'react';

const Contact = () => {
    // Add the content of the home section here
    const title = "Contact"; // Replace with the actual name
    return (
        <div id='contact' className='flex flex-row max-w-7xl mx-auto px-6'>
            <div className='title flex flex-col w-[30%] py-8 pl-4'>
               <div className='text-[46px]'>{title}</div>
            </div>

            <div className='normal flex flex-col px-4 py-12 w-[70%] space-y-6 leading-relaxed'>
                <div className='text-[28px]'>yzhao172 @ ucsc.edu</div>
            </div>
        </div>
    );
};

export default Contact;