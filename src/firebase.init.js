import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
export default auth;
