// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApIL4sXT0_K5ISQS0_MvQ1NN5li80ZX2M",
  authDomain: "my-chat-app-4ae5a.firebaseapp.com",
  projectId: "my-chat-app-4ae5a",
  storageBucket: "my-chat-app-4ae5a.appspot.com",
  messagingSenderId: "636913757925",
  appId: "1:636913757925:web:f178c41ff3013d56852e0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
