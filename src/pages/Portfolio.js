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

  const name = "Your Name"; // Replace with the actual name
  const selfIntro = "Your self-introduction goes here."; // Replace with the actual self-introduction

  return (
    <div id="home" className="">

      <div className="flex flex-col pt-24 px-36">
        <div className="flex-shrink-0 px-12">
          <img
            src="/mona.jpg"
            alt="Profile Photo"
            className="w-1/5 h-auto rounded-full"
          />
        </div>
        <h1 className="text-3xl font-normal mb-4">{name}</h1>
      </div>
    </div>
  );
};

export default Portfolio;
