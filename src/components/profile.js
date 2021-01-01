import React from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Container, Button } from "react-bootstrap";

const Profile = () => {
  const firebase = useFirebase();
  const { displayName, photoURL } = useSelector((state) => state.firebase.auth);

  const signOut = () => {
    firebase.logout();
  };
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <h1>Hello {displayName}</h1>
      <img src={photoURL} alt="Profile " />
      <Button
        onClick={(event) => {
          event.preventDefault();
          signOut();
        }}
      >
        Log Out
      </Button>
    </Container>
  );
};
export default Profile;
