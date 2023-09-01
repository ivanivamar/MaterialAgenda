// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKXO2zgNVgjKd0jeJH-StaifNrYq0M3g8",
    authDomain: "materialreader-83f9e.firebaseapp.com",
    projectId: "materialreader-83f9e",
    storageBucket: "materialreader-83f9e.appspot.com",
    messagingSenderId: "686466007648",
    appId: "1:686466007648:web:c5661b3085ea951e603905",
    measurementId: "G-ZT3BSKPT0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
