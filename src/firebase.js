import firebase from 'firebase/app'


let firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebaseConfig


 