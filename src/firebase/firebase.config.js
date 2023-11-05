// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAew9vUzl5Xy9mDsbtPOH_pZQmKWqTzbNk",
  authDomain: "career-course-a86cc.firebaseapp.com",
  projectId: "career-course-a86cc",
  storageBucket: "career-course-a86cc.appspot.com",
  messagingSenderId: "639404421297",
  appId: "1:639404421297:web:cc93de581b462af3caf290",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
