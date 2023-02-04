import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCk0xiwHgC0tF_CjMdWSzVeASY4bktBj5c',
  authDomain: 'crwb-clothing-db-4a108.firebaseapp.com',
  projectId: 'crwb-clothing-db-4a108',
  storageBucket: 'crwb-clothing-db-4a108.appspot.com',
  messagingSenderId: '132862630797',
  appId: '1:132862630797:web:e7943e56f73a559bbd7bc4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

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

  // if user data does not exists

  // if user data exists
};
