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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;