// components/EditContent.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const EditContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch content from Firebase
    const fetchData = async () => {
      try {
        const docRef = firestore.collection('your-collection-name').doc('content');
        const snapshot = await docRef.get();

        if (snapshot.exists()) {
          setContent(snapshot.data().content);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    // Save edited content to Firebase
    const docRef = firestore.collection('your-collection-name').doc('content');
    docRef.set({ content });
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditContent;
