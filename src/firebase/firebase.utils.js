import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRmW5_udOV2K6jcjPFXiHC3s6ZsAkk6Vc",
  authDomain: "crown-clothing-10bf1.firebaseapp.com",
  projectId: "crown-clothing-10bf1",
  storageBucket: "crown-clothing-10bf1.appspot.com",
  messagingSenderId: "261368974042",
  appId: "1:261368974042:web:e3e33f98e5bfd0ec4ab3e3",
  measurementId: "G-Z5VVVF9GYN"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);


  // if snapshot doest not exist,this function is to create data in userRef place, we are checking if there's any data. 
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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;