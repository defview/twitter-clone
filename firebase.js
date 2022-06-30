// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOJj4gUjTqTlv347bqPu0jua3N9O805pA",
    authDomain: "twitter-clone-f3afa.firebaseapp.com",
    projectId: "twitter-clone-f3afa",
    storageBucket: "twitter-clone-f3afa.appspot.com",
    messagingSenderId: "209190040039",
    appId: "1:209190040039:web:e8beec42234a55b00dcd42"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };