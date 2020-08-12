
import * as firebase from  'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMhjFt_BukQUKIBLLsh9YnJaz0dnqQ7Nk",
    authDomain: "thuyyuht-451fb.firebaseapp.com",
    databaseURL: "https://thuyyuht-451fb.firebaseio.com",
    projectId: "thuyyuht-451fb",
    storageBucket: "thuyyuht-451fb.appspot.com",
    messagingSenderId: "66509709305",
    appId: "1:66509709305:web:59d9614b962e0f183ea728"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Access Firebase services using shorthand notation
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};