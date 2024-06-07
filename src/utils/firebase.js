// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3sjfUb_aOZ5x0cmBNdmDE1W-j5osuCfM",
  authDomain: "ngpt-ba991.firebaseapp.com",
  projectId: "ngpt-ba991",
  storageBucket: "ngpt-ba991.appspot.com",
  messagingSenderId: "272062829525",
  appId: "1:272062829525:web:a39e043351e0ba387f235c",
  measurementId: "G-V0X2ENBNQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
