// pages/Portfolio.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

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



  return (
    <div>
      <div className='py-10'>
        <Home />
      </div>
      <div className='bg-pink-50'>
        <Experiences />
      </div>
      <div className=''>
        <Projects />
      </div>
      <div className='bg-pink-50'>
        <Publications />
      </div>
      <div className=''>
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
