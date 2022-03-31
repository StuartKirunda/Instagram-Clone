// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3mSkE9h4VgCK48xyS3JkNGJKYei3Tsz4",
    authDomain: "instagram-clone-a475d.firebaseapp.com",
    projectId: "instagram-clone-a475d",
    storageBucket: "instagram-clone-a475d.appspot.com",
    messagingSenderId: "959140772117",
    appId: "1:959140772117:web:ce8639ed5414f03089911c"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);


export { firebase, auth, db };