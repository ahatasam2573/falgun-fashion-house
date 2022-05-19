// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOG6DAEX0TfKsC_gy6NFnnxKGI43Nb0bM",
    authDomain: "falgun-fashion-house.firebaseapp.com",
    projectId: "falgun-fashion-house",
    storageBucket: "falgun-fashion-house.appspot.com",
    messagingSenderId: "761433535815",
    appId: "1:761433535815:web:b204af74c4bd3dc53ec862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
