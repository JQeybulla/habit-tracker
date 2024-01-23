// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebase = {
  apiKey: "AIzaSyDnefp3s5ZK9JgDavooHdA-RK0ZJdxO1PA",
  authDomain: "habit-tracker-524b9.firebaseapp.com",
  projectId: "habit-tracker-524b9",
  storageBucket: "habit-tracker-524b9.appspot.com",
  messagingSenderId: "931007836145",
  appId: "1:931007836145:web:ba660589b20aadd0169e50",
  measurementId: "G-6TL9CW9W9E"
};

// Initialize Firebase
const app = initializeApp(firebase);
export const auth = getAuth(app);
export const db = getFirestore(app);
