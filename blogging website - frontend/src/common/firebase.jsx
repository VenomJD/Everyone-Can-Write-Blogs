import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtg9PEP2jvdOT46-ezxR5G0kGhycT6lXY",
    authDomain: "blogsv2-e07f9.firebaseapp.com",
    projectId: "blogsv2-e07f9",
    storageBucket: "blogsv2-e07f9.firebasestorage.app",
    messagingSenderId: "517897202897",
    appId: "1:517897202897:web:57cc50b3a10d154e1c69f0"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}