import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbiVY6goMRq5pCnExYbn4MrOGVUEounLs",
    authDomain: "movie-polling-pf.firebaseapp.com",
    projectId: "movie-polling-pf",
    storageBucket: "movie-polling-pf.appspot.com",
    messagingSenderId: "241865728436",
    appId: "1:241865728436:web:533ef4ca3d2df4b6f952e1",
    measurementId: "G-QR0M5EY0H6"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
