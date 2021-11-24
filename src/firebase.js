// Import the functions you need from the SDKs you need
import "firebase/auth";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGnK82xfOsuOIrkbRAbDZwDgp8AIg74qU",
  authDomain: "birthdayplanner-a91a5.firebaseapp.com",
  projectId: "birthdayplanner-a91a5",
  storageBucket: "birthdayplanner-a91a5.appspot.com",
  messagingSenderId: "1099016070636",
  appId: "1:1099016070636:web:e265de450cdf19196d0cc9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
