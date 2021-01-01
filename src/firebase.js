import firebase from "firebase/app";
import "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5JUPUbS003--RZ2N0HWPzIfWhm7UWto0",
  authDomain: "cetouchapp.firebaseapp.com",
  projectId: "cetouchapp",
  storageBucket: "cetouchapp.appspot.com",
  messagingSenderId: "213317255207",
  appId: "1:213317255207:web:dede824284a3a1d421ce02",
  measurementId: "G-6NHPETV5TC",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firebase = app.firebase();
export default app;
