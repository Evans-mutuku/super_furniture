import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDdrtii4cEod5uGqmnxfBlGyZ7GO4rf2ws",
  authDomain: "nyafu-eb708.firebaseapp.com",
  projectId: "nyafu-eb708",
  storageBucket: "nyafu-eb708.appspot.com",
  messagingSenderId: "141997969457",
  appId: "1:141997969457:web:f845592ddf2703e3400510",
  measurementId: "G-R6ZB6QKJY4"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, db, provider}