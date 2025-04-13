// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhfywkurko_VO25LarkHwCbcOBMK2GFA",
  authDomain: "euro-trans.firebaseapp.com",
  projectId: "euro-trans",
  storageBucket: "euro-trans.firebasestorage.app",
  messagingSenderId: "55038833188",
  appId: "1:55038833188:web:9fee10c474dcf8456d5eb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);