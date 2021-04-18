import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2gK5xYk7EWBqFLEgMKRWqHem9epsDzbI",
  authDomain: "dorshs-website.firebaseapp.com",
  projectId: "dorshs-website",
  storageBucket: "dorshs-website.appspot.com",
  messagingSenderId: "862469438259",
  appId: "1:862469438259:web:af7312b6d41c03ef90dc46",
  measurementId: "G-QXGFNQRQE8",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
// const auth2 = firebase.auth();
const storage = firebase.storage();
// const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage };
