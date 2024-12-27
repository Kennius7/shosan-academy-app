import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";






const apiKey = import.meta.env.VITE_API_KEY;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDERID;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "shosan-acodemia-app.firebaseapp.com",
  projectId: "shosan-acodemia-app",
  storageBucket: "shosan-acodemia-app.firebasestorage.app",
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: "G-ZXK5YT4PBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

