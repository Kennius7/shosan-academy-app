import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGuV-IyFdvojdLyi8sWs_KGfiUwgqpVg",
  authDomain: "shosan-acodemia-app.firebaseapp.com",
  projectId: "shosan-acodemia-app",
  storageBucket: "shosan-acodemia-app.firebasestorage.app",
  messagingSenderId: "489465738069",
  appId: "1:489465738069:web:35970f316c39b06211f5dc",
  measurementId: "G-ZXK5YT4PBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



