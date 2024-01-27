// components/EditContent.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const EditContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch content from Firebase
    const fetchData = async () => {
      try {
        const docRef = firestore.collection('your-collection-name').doc('your-document-id');
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists()) {
          setContent(docSnapshot.data().content);
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    // Save edited content to Firebase
    const docRef = firestore.collection('your-collection-name').doc('your-document-id');
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