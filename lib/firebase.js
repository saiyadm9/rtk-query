import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCksMGFfxAEy_4icY4oSoqmoVUnSFWYxm4",
  authDomain: "auth-practice-486df.firebaseapp.com",
  projectId: "auth-practice-486df",
  storageBucket: "auth-practice-486df.firebasestorage.app",
  messagingSenderId: "1057000019131",
  appId: "1:1057000019131:web:c547de7f71c3054d1a459e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);