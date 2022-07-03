import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCcfc76-1eNyTfdzfWrtMtDqiZI9yzv8zA",

  authDomain: "alba-hotel-ee99b.firebaseapp.com",

  databaseURL: "https://alba-hotel-ee99b-default-rtdb.firebaseio.com",

  projectId: "alba-hotel-ee99b",

  storageBucket: "alba-hotel-ee99b.appspot.com",

  messagingSenderId: "25417203390",

  appId: "1:25417203390:web:1258acfab6c4ec106668ef",

  measurementId: "G-Z6Z5N32YXJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
