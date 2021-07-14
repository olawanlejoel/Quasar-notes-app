import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRcq5PXJSi5c5C8rl6Q6nudIJqTFaxXeA",
  authDomain: "notesapp-ffd7c.firebaseapp.com",
  projectId: "notesapp-ffd7c",
  storageBucket: "notesapp-ffd7c.appspot.com",
  messagingSenderId: "18944010047",
  appId: "1:18944010047:web:ddfb46fc6bc8bba375158a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
