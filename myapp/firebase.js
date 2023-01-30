// This file was created via Firebase credentials

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2cOmA7xKeCBC93R1IP173cKD7VW6HbiU",
  authDomain: "svelteapp-f4f38.firebaseapp.com",
  projectId: "svelteapp-f4f38",
  storageBucket: "svelteapp-f4f38.appspot.com",
  messagingSenderId: "568004863642",
  appId: "1:568004863642:web:6c7ca64da6a9cf1412a123",
  measurementId: "G-KDLYGWGJF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);