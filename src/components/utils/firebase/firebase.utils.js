import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVtDlpII6iqUuxRvo99YOaXE69kl6tftQ",
    authDomain: "crwn-clothing-db-cfc37.firebaseapp.com",
    projectId: "crwn-clothing-db-cfc37",
    storageBucket: "crwn-clothing-db-cfc37.appspot.com",
    messagingSenderId: "672329233959",
    appId: "1:672329233959:web:a1be4a9dddeabb263fc002"
};
  
const firebaseApp = initializeApp(firebaseConfig); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider)
export const db= getFirestore();

export const createUserDocumentFromAuth = async(
  userAuth, 
  additionalInformation= {}
  ) => {
  const userDocRef = doc(db, 'users',userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
  
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch(error){
      console.log('error creating the user',error.message);
    }
  }
  
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)