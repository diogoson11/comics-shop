import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyB7SuvlU6kdtYNFlSAPUjN7ahTssifbShw",
    authDomain: "comics-shop-2ad49.firebaseapp.com",
    projectId: "comics-shop-2ad49",
    storageBucket: "comics-shop-2ad49.appspot.com",
    messagingSenderId: "123435964204",
    appId: "1:123435964204:web:ad74ef31f0fc8a78f33e89",
    measurementId: "G-DL1D31F7F7"
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;