import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-4d843.firebaseapp.com",
  projectId: "blog-4d843",
  storageBucket: "blog-4d843.appspot.com",
  messagingSenderId: "706500015222",
  appId: "1:706500015222:web:1498b8137c788a18b15b57",
  measurementId: "G-JLLYMD2FYR"
};

export const app = initializeApp(firebaseConfig);