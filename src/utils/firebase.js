// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbtxTB_0pEjQBMcpgXMBupdpEBTkQuepI",
  authDomain: "newnetflix-4028b.firebaseapp.com",
  projectId: "newnetflix-4028b",
  storageBucket: "newnetflix-4028b.appspot.com",
  messagingSenderId: "770067329626",
  appId: "1:770067329626:web:92cfb1354d7f940d7f9e63",
  measurementId: "G-Y0VMYQVEFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
