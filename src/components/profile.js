import React from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifySelf: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  media: {
    height: 140,
  },
});

const Profile = () => {
  const classes = useStyles();
  const firebase = useFirebase();
  const { displayName } = useSelector((state) => state.firebase.profile);
  const authData = useSelector((state) => state.firebase.auth);
  console.log(authData);
  const signOut = () => {
    firebase.logout();
  };
  return (
    <Card className={classes.root} align="center">
      <h1>Hello {displayName}</h1>
      <Avatar alt={displayName} src="/abcd" />
      <p>Welcome</p>
      <Button
        color="primary"
        variant="contained"
        onClick={(event) => {
          event.preventDefault();
          signOut();
        }}
      >
        Log Out
      </Button>
    </Card>
  );
};
export default Profile;
