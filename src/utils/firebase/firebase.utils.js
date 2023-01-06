// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBA_KC2dV8uYrVAaeFEZr3cOAmSscO3C9M',
  authDomain: 'crwn-clothing-db-836ca.firebaseapp.com',
  projectId: 'crwn-clothing-db-836ca',
  storageBucket: 'crwn-clothing-db-836ca.appspot.com',
  messagingSenderId: '779761332612',
  appId: '1:779761332612:web:9c15511d8e14c5bf9a2dd1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWIthGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log('userDocRef', userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot, userSnapshot.exists()); // shows whether the data exists in db or not

  // If user not exists, create a new user in the db
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
