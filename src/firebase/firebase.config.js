// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPVVj9jwd2vTqEzh-4Rk-T_k9clm7HKLc",
  authDomain: "fitness-king-86dac.firebaseapp.com",
  projectId: "fitness-king-86dac",
  storageBucket: "fitness-king-86dac.firebasestorage.app",
  messagingSenderId: "715842316182",
  appId: "1:715842316182:web:90e1bdf6788ca7a1589fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);