// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "chat-app-translator-f1ff4.firebaseapp.com",
  projectId: "chat-app-translator-f1ff4",
  storageBucket: "chat-app-translator-f1ff4.appspot.com",
  messagingSenderId: "211884311297",
  appId: "1:211884311297:web:ce375d6049c0cbd6c35100",
};

// Initialize Firebase
const app = getApp.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };

