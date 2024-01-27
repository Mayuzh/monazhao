// components/Portfolio.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import Navbar from '../components/NavBar'; // Adjust the path based on your project structure

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
      <Navbar />
      <h1>Portfolio</h1>
      <p>{content}</p>
    </div>
  );
};

export default Portfolio;
