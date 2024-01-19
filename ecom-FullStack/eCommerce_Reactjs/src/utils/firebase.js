import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyAY2P_be-AZBWCQahRionGgduBSnFQieBg",
  authDomain: "apimohinhweb.firebaseapp.com",
  projectId: "apimohinhweb",
  storageBucket: "apimohinhweb.appspot.com",
  messagingSenderId: "456902451127",
  appId: "1:456902451127:web:73173a217878d403511232"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))