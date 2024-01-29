// pages/Portfolio.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { FaGraduationCap } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";

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
  const selfIntro1 = "I am a master student in Computer Science and Engineering at UC Santa Cruz. I am currently working as a Graduate Student Researcher(GSR) at the UCSC Advanced Visualization and Interactive Systems(AVIS) Lab advised by Professor Alex Pang."
  const selfIntro2 = "My current research focuses on developing and comparing different machine learning models for the purpose of extracting shorelines from video frames, which can be applied in environmental monitoring and coastal management."
  const selfIntro3 = "I am also enthusiastic about full-stack development, using modern tools to create websites and software. My passion lies in crafting seamless and user-friendly digital experiences by employing the latest development technologies.";
  return (
    <div className='py-8'>


      <div className='flex flex-row mt-20 mx-64'>
        <div id='Mona' className='flex flex-col w-[30%] py-8 px-2 mx-4'>
          <img
            src="/mona.jpg"
            alt="Profile Photo"
            className="w-52 rounded-full mx-auto"
          />
          <div className='flex flex-col text-center mt-4 leading-none'>
            <div className="text-[40px]">{name}</div>
            <div className="text-[20px] text-stone-500 my-3">{major}</div>
            <div className="text-[20px] text-stone-500">{college}</div>
          </div>
        </div>

        <div id='aboutMe' className='flex flex-col p-4 w-[70%] space-y-4 text-[21px]'>
          <span> {selfIntro1}</span>
          <span>{selfIntro2}</span>
          <span>{selfIntro3}</span>
          <div className='flex flex-row'>
            <div className="w-[60%] flex flex-col">
              <div className="text-[24px] my-4">Education</div>
              <div className='flex flex-row mb-2'>
                <FaGraduationCap size={28} className='mr-5 text-pink-950' />
                <div className='flex flex-col'>
                  <span>M.S. in Computer Science and Engineering</span>
                  <span className='text-stone-500 text-base'>2023 - 2024</span>
                  <span className='text-stone-500 text-base'>UC Santa Cruz</span>
                </div>
              </div>
              <div className='flex flex-row'>
                <FaGraduationCap size={28} className='mr-5 text-pink-950' />
                <div className='flex flex-col'>
                  <span>B.S. in Computer Science</span>
                  <span className='text-stone-500 text-base'>2019 - 2023</span>
                  <span className='text-stone-500 text-base'>UC Santa Cruz</span>
                </div>
              </div>
            </div>

            <div className="w-[40%] flex flex-col">
              <div className="text-[24px] my-4">Interests</div>
              <div className='flex flex-row mb-2'>
                <GiFallingStar size={24} className='mx-5 text-pink-950' />
                <div className=''>
                  Machine Learning
                </div>
              </div>
              <div className='flex flex-row mb-2'>
                <GiFallingStar size={24} className='mx-5 text-pink-950' />
                <div className=''>
                  Computer Vision
                </div>
              </div>
              <div className='flex flex-row mb-2'>
                <GiFallingStar size={24} className='mx-5 text-pink-950' />
                <div className=''>
                  Computer Graphics
                </div>
              </div>
              <div className='flex flex-row mb-2'>
                <GiFallingStar size={24} className='mx-5 text-pink-950' />
                <div className=''>
                  Software/ Web Development
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
