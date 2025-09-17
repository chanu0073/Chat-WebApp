import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVKQHGyueIpjAJkvrgTMGHJogm5IWgJiI",
  authDomain: "chatwebapp-7ae34.firebaseapp.com",
  projectId: "chatwebapp-7ae34",
  storageBucket: "chatwebapp-7ae34.appspot.com",
  messagingSenderId: "603090130518",
  appId: "1:603090130518:web:5606acfe9ab13234e2cdf7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
