import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATx8A5C2KN-LpQyIfOnGh2SlspnI9XQaw",
  authDomain: "crown-clothing-1962c.firebaseapp.com",
  projectId: "crown-clothing-1962c",
  storageBucket: "crown-clothing-1962c.appspot.com",
  messagingSenderId: "435348696629",
  appId: "1:435348696629:web:3baf77b146f0b8c74c0b7c",
  measurementId: "G-1E8RNB0G55",
};
firebase.initializeApp(firebaseConfig);
export const createUserProfile = async (auth, additionaldata) => {
  if (!auth) return;
  const useref = firestore.doc(`Users/${auth.uid}`);
  const snapshot = await useref.get();
  if (!snapshot.exists) {
    const { displayName, email } = auth;
    const date = new Date();
    try {
      await useref.set({
        displayName,
        email,
        date,
        ...additionaldata,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return useref;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singninwithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
