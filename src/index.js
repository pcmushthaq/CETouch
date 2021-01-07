import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createStore } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import App from "./App";
import { rootReducer } from "./reducers/reducer";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const firebaseConfig = {
  apiKey: "AIzaSyB5JUPUbS003--RZ2N0HWPzIfWhm7UWto0",
  authDomain: "cetouchapp.firebaseapp.com",
  projectId: "cetouchapp",
  storageBucket: "cetouchapp.appspot.com",
  messagingSenderId: "213317255207",
  appId: "1:213317255207:web:dede824284a3a1d421ce02",
  measurementId: "G-6NHPETV5TC",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
