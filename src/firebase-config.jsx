// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwn9ew5_cps4GLyRU_hIovknx_5Csl9sI",
  authDomain: "muireact-7b3a6.firebaseapp.com",
  projectId: "muireact-7b3a6",
  storageBucket: "muireact-7b3a6.appspot.com",
  messagingSenderId: "1039220023911",
  appId: "1:1039220023911:web:33ee14a1afeb29e9492ac2"
//   measurementId: "creg817NthHZYN7l9Udh"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);