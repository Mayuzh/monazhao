// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW30VHOLmbX8C6NlOA0GSCt6agWB5CWPM",
  authDomain: "monazhao-afeba.firebaseapp.com",
  projectId: "monazhao-afeba",
  storageBucket: "monazhao-afeba.appspot.com",
  messagingSenderId: "254976783151",
  appId: "1:254976783151:web:df2961ffdbd777c448a7da",
  measurementId: "G-W0D607CZ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };