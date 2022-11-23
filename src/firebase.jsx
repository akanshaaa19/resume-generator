import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbVm9IrLsh0zGFVZVRKaOrWgCYRq2fXGE",
  authDomain: "resume-generator-32c98.firebaseapp.com",
  projectId: "resume-generator-32c98",
  storageBucket: "resume-generator-32c98.appspot.com",
  messagingSenderId: "524743441576",
  appId: "1:524743441576:web:7986ebf84d99374c49169d",
  measurementId: "G-404H26T01L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db}
