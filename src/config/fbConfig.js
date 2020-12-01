import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCNpTtb90JegV1JV6J4M1Wp0DG5VgXjfQo",
  authDomain: "flashcard-edadd.firebaseapp.com",
  databaseURL: "https://flashcard-edadd.firebaseio.com",
  projectId: "flashcard-edadd",
  storageBucket: "flashcard-edadd.appspot.com",
  messagingSenderId: "715147083052",
  appId: "1:715147083052:web:04e63b9f8047b3d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  firebase.firestore().settings({timestampsInSnapshots:true})

  export  default firebase