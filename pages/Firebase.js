import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDOal22pGSaF9Jv1NBaU8iK7bESmtPmqdI",
  authDomain: "prac-16f5f.firebaseapp.com",
  projectId: "prac-16f5f",
  storageBucket: "prac-16f5f.appspot.com",
  messagingSenderId: "297148723642",
  appId: "1:297148723642:web:434253d6ac797ad2696d83",
  measurementId: "G-9QZV3N53T8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
