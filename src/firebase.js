// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMun3LQq4-Tz0IE0EVMsi3iStYBUBg2Os',
  authDomain: 'react-portfolio-job.firebaseapp.com',
  projectId: 'react-portfolio-job',
  storageBucket: 'react-portfolio-job.appspot.com',
  messagingSenderId: '403733051813',
  appId: '1:403733051813:web:609bd15edb47f94d25d04c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
