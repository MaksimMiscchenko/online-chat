import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiPvuxVwf54c8OjSxuC93wFlZAjbqVG54",
  authDomain: "chat-2165f.firebaseapp.com",
  projectId: "chat-2165f",
  storageBucket: "chat-2165f.appspot.com",
  messagingSenderId: "870043838292",
  appId: "1:870043838292:web:fef25cee83949ea5630ac1",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
