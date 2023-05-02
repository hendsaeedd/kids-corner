// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPeAZsjnxDIj7y3Y5MeRKlezCYCP-s4eo",
  authDomain: "fir-auth-19900.firebaseapp.com",
  projectId: "fir-auth-19900",
  storageBucket: "fir-auth-19900.appspot.com",
  messagingSenderId: "303130721581",
  appId: "1:303130721581:web:f8f9a5c67951f2a6b0a7a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);