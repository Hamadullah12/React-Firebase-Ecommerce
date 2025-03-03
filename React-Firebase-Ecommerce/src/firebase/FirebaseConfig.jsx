// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKExdLDkAKFQU2lUgtnwKQSufR3UJf_ZI",
  authDomain: "novastore-40269.firebaseapp.com",
  projectId: "novastore-40269",
  storageBucket: "novastore-40269.firebasestorage.app",
  messagingSenderId: "270028081837",
  appId: "1:270028081837:web:fbfb24d082a262dfd3d424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
