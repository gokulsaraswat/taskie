import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "taskie-d935c.firebaseapp.com",
  projectId: "taskie-d935c",
  storageBucket: "taskie-d935c.appspot.com",
  messagingSenderId: "929163254263",
  appId: "1:929163254263:web:40f571e41ce93c5a6036f2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
