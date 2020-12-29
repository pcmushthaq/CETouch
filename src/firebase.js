import firebase from "firebase/app";
import "firebase/app";

const app = firebase.initializeApp({
    apiKey:process.env.REACT_FIREBASE_APP_apiKey,
    authDomain:process.env.REACT_FIREBASE_APP_authDomain,
    projectId:process.env.REACT_FIREBASE_APP_projectId,
    storageBucket:process.env.REACT_FIREBASE_APP_storageBucket,
    messagingSenderId:process.env.REACT_FIREBASE_APP_messagingSenderId,
    appId:process.env.REACT_FIREBASE_APP_appId,
    measurementId:process.env.REACT_FIREBASE_APP_measurementId
})

export const auth = app.auth();
export default app;