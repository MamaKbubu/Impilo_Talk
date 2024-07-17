// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1bKjGsy-gzqNpkR9T0n-as67RYliHPso",
  authDomain: "safe-f7c09.firebaseapp.com",
  databaseURL: "https://safe-f7c09-default-rtdb.firebaseio.com",
  projectId: "safe-f7c09",
  storageBucket: "safe-f7c09.appspot.com",
  messagingSenderId: "76313572806",
  appId: "1:76313572806:web:32b23e0cb82c34ad3eaec7",
  measurementId: "G-GVTJVY7DCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // eslint-disable-next-line
export const auth = getAuth(app);
