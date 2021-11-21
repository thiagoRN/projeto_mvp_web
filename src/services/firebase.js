// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCT1LSkMvBmKxA2v0LcH2-A5SZNOEHG12c",
  authDomain: "projeto-mvp-web-av2.firebaseapp.com",
  projectId: "projeto-mvp-web-av2",
  storageBucket: "projeto-mvp-web-av2.appspot.com",
  messagingSenderId: "585644721451",
  appId: "1:585644721451:web:ff59e5d5af9d532924b16e",
  measurementId: "G-DXE656BR9H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp