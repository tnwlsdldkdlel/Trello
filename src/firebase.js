import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAdF0sf8FVXesxViHv011VLLxe_9f3XmzI",
    authDomain: "ttukttak-2f704.firebaseapp.com",
    projectId: "ttukttak-2f704",
    storageBucket: "ttukttak-2f704.firebasestorage.app",
    messagingSenderId: "475377513610",
    appId: "1:475377513610:web:e1838213572db7581de973"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);