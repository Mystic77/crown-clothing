import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB1qHtT7sCIJUdBLSx7JiInO_-oosKt4Ts",
  authDomain: "crown-db-6ad10.firebaseapp.com",
  projectId: "crown-db-6ad10",
  storageBucket: "crown-db-6ad10.appspot.com",
  messagingSenderId: "950920026438",
  appId: "1:950920026438:web:25f6a6fb67df69ef0aad47",
  measurementId: "G-095BTLP9DZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firsetore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;