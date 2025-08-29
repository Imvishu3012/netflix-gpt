// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpsPa-WUGdtAkigL-8XGJfguB96Ol44Y",
  authDomain: "netflixgpt-825f7.firebaseapp.com",
  projectId: "netflixgpt-825f7",
  storageBucket: "netflixgpt-825f7.appspot.com", // <-- fixed here
  messagingSenderId: "207959075179",
  appId: "1:207959075179:web:3973b75e87da643d6f042e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);
export const auth = getAuth(app);