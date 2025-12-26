// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHmrErUv8fb6BcH0lAii2OpltM14sayU",
  authDomain: "fir-fighter-cc73f.firebaseapp.com",
  projectId: "fir-fighter-cc73f",
  storageBucket: "fir-fighter-cc73f.firebasestorage.app",
  messagingSenderId: "1037286300968",
  appId: "1:1037286300968:web:5dc5f3ac6bcecacf7bc41d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);