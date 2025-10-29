// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYWv6YBHJZm6UCkCTmXeVqGBy3bi0Ea4k",
  authDomain: "my-first-firebase-app-e33f8.firebaseapp.com",
  projectId: "my-first-firebase-app-e33f8",
  storageBucket: "my-first-firebase-app-e33f8.firebasestorage.app",
  messagingSenderId: "919450045543",
  appId: "1:919450045543:web:89ed8bbaf5b9da3dd098c2",
  measurementId: "G-F5TBY7HEG5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

