import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig); // firebase project setting
export const authService = getAuth(firebaseApp);
export const dbService = getFirestore();

// 기존 범주님 코드
// const db = firebase.firestore();
// export { db };
