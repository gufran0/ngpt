// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs-KFTHpp8_M_A-zPQ5iwjVShO2HQVTQ0",
  authDomain: "ngpt-new.firebaseapp.com",
  projectId: "ngpt-new",
  storageBucket: "ngpt-new.appspot.com",
  messagingSenderId: "73557690745",
  appId: "1:73557690745:web:4c67868cf6a768ca5007a8",
  measurementId: "G-4PG3QV7GFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
