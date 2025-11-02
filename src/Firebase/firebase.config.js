// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCeegMV8lCeY4hmNZBpfTD4txfNHdwyZY",
  authDomain: "fit-gym-7bce5.firebaseapp.com",
  projectId: "fit-gym-7bce5",
  storageBucket: "fit-gym-7bce5.appspot.com",
  messagingSenderId: "990389223654",
  appId: "1:990389223654:web:07ffd45e8df6fc97ac3b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)