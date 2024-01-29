// pages/Portfolio.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const Portfolio = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Sync with Firebase content
    const fetchData = async () => {
      try {
        const docRef = firestore().collection('content').doc('portfolio');
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists()) {
          setContent(docSnapshot.data()?.content || '');
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, []);

  const name = "Mona Zhao"; // Replace with the actual name
  const major = "M.S. in Computer Science & Engineering";
  const college = "UC Santa Cruz";
  const selfIntro = "Your self-introduction goes here."; // Replace with the actual self-introduction

  return (
    <div className='py-8'>


      <div className='flex flex-row mt-20 mx-64'>
        <div id='Mona' className='flex flex-col w-[30%] py-8 px-2 mx-4'>
          <img
            src="/mona.jpg"
            alt="Profile Photo"
            className="w-52 rounded-full mx-auto"
          />
          <div className='flex flex-col text-center mt-4'>
            <div className="text-[40px] font-base font-mono leading-none">{name}</div>
            <div className="text-[20px] text-stone-500 my-3 font-normal leading-tight">{major}</div>
            <div className="text-[20px] text-stone-500 font-normal leading-tight">{college}</div>
          </div>
          

        </div>
        <div id='aboutMe' className='flex flex-col p-4 font-[22px] w-[70%]'>
          <span>I am an Assistant Professor in Computer Science and Engineering and an affiliate of the Science & Justic Research Center at UC Santa Cruz. I am part of the AI group @ UCSC and I lead the AI Explainability and Accountability (AIEA) Lab.</span>
          <span>I am an Assistant Professor in Computer Science and Engineering and an affiliate of the Science & Justic Research Center at UC Santa Cruz. I am part of the AI group @ UCSC and I lead the AI Explainability and Accountability (AIEA) Lab.</span>
          <span>I am an Assistant Professor in Computer Science and Engineering and an affiliate of the Science & Justic Research Center at UC Santa Cruz. I am part of the AI group @ UCSC and I lead the AI Explainability and Accountability (AIEA) Lab.</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
