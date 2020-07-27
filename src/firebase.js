import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHDpWgoaHzh7b5P8YhdrSnDNvlfg_VY-4",
    authDomain: "burgerqueen-d2dca.firebaseapp.com",
    databaseURL: "https://burgerqueen-d2dca.firebaseio.com",
    projectId: "burgerqueen-d2dca",
    storageBucket: "burgerqueen-d2dca.appspot.com",
    messagingSenderId: "893207659788",
    appId: "1:893207659788:web:c5a7a39f62e1aa06c67529",
    measurementId: "G-8HYFSYX7PB"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();