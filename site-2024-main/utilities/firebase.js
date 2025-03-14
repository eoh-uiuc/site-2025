import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpHGiqM3lku8J41eid2VZARG7HIQTyX80",
  authDomain: "eoh-volunteer.firebaseapp.com",
  projectId: "eoh-volunteer",
  storageBucket: "eoh-volunteer.firebasestorage.app",
  messagingSenderId: "1066243724430",
  appId: "1:1066243724430:web:a7bde85c77685e4e3225df",
  measurementId: "G-DEY3XTC55J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, firestore, signInWithPopup, signOut, collection, getDocs, doc, updateDoc, arrayUnion };