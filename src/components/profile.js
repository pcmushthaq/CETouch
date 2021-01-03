import React from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Container, Button } from "react-bootstrap";

const Profile = () => {
  const firebase = useFirebase();
  const { displayName } = useSelector((state) => state.firebase.profile);

  const signOut = () => {
    firebase.logout();
  };
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <h1>Hello {displayName}</h1>
      <p>Welcome</p>
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
