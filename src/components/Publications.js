// components/Home.js
import React from 'react';

const Publications = () => {
    // Add the content of the home section here
    const title = "Publications"; // Replace with the actual name
    return (
        <div id='publications' className='title flex flex-row max-w-7xl mx-auto px-6'>
            <div className='flex flex-col w-[30%] py-8 pl-4'>
               <div className='text-[50px]'>{title}</div>
            </div>

            <div className='flex flex-col p-4 w-[70%] space-y-6 leading-relaxed'>
               
  
            </div>
        </div>
    );
};

export default Publications;