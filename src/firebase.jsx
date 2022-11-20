import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVtiboU4R5dn8SlxhkwwVzrZmsJ3W7l0Y",
  authDomain: "resume-app-f0ba7.firebaseapp.com",
  databaseURL: "https://resume-app-f0ba7-default-rtdb.firebaseio.com",
  projectId: "resume-app-f0ba7",
  storageBucket: "resume-app-f0ba7.appspot.com",
  messagingSenderId: "516158919331",
  appId: "1:516158919331:web:cad4db7f749d99c309a516",
  measurementId: "G-G8G5M0GRWK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db}
