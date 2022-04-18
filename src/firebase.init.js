import getAuth from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7UXhMGjXc5x0-2DnEbI6ezBtoFwfH414",
    authDomain: "power-zone-30abb.firebaseapp.com",
    projectId: "power-zone-30abb",
    storageBucket: "power-zone-30abb.appspot.com",
    messagingSenderId: "745182561108",
    appId: "1:745182561108:web:d815d4aa5a73731db9fec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;