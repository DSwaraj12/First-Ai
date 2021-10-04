import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let firebaseConfig = {
  apiKey: "AIzaSyAMoip3L2IryfayapZgk69rGYbmyXkDtI8",
  authDomain: "first-sight-auth.firebaseapp.com",
  projectId: "first-sight-auth",
  storageBucket: "first-sight-auth.appspot.com",
  messagingSenderId: "449071230157",
  appId: "1:449071230157:web:f70e39557c647194c6cd84",
  measurementId: "G-PTJL6CM1JE",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
