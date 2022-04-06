// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdEZvhB-oIHDmfW4G0j7i1opuY_BeR_78",
  authDomain: "bachkhoatech-dadc1.firebaseapp.com",
  databaseURL: "https://bachkhoatech-dadc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bachkhoatech-dadc1",
  storageBucket: "bachkhoatech-dadc1.appspot.com",
  messagingSenderId: "851910083579",
  appId: "1:851910083579:web:37c2837b81dd49683b415e",
  measurementId: "G-C8444ZH2QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);