import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUwKIGk3eM9AhLGEfOu4Xgo8l80X1feS4",
  authDomain: "instagram-b3e0f.firebaseapp.com",
  projectId: "instagram-b3e0f",
  storageBucket: "instagram-b3e0f.appspot.com",
  messagingSenderId: "13219161059",
  appId: "1:13219161059:web:9951058c300286accef6d6",
  measurementId: "G-84B3D2F4H7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
