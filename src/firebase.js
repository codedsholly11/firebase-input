// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SpFeuaof_abtrgtAD8FpeCjWy7rdhp8",
  authDomain: "sign-up-c3f9e.firebaseapp.com",
  projectId: "sign-up-c3f9e",
  storageBucket: "sign-up-c3f9e.appspot.com",
  messagingSenderId: "570348208238",
  appId: "1:570348208238:web:3b77de932fb13ed550267f",
  measurementId: "G-H1LLQS8Y0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
