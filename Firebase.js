import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAP499K0tJvhOj-Hc6h89yZgKWnmkIjiE8",
    authDomain: "app-4fd7d.firebaseapp.com",
    projectId: "app-4fd7d",
    storageBucket: "app-4fd7d.appspot.com",
    messagingSenderId: "372649735982",
    appId: "1:372649735982:web:002976c3aca30c9bdaacbf",
    measurementId: "G-TP9YBNJJYX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, provider };