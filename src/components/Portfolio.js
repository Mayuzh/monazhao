// components/Portfolio.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const Portfolio = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Sync with Firebase content
    const fetchData = async () => {
      const snapshot = await firestore.ref('/content').once('value');
      setContent(snapshot.val());
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <p>{content}</p>
    </div>
  );
};

export default Portfolio;
