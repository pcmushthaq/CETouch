import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const handleChange = (e) => {};

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/profile");
      });
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4  ">SignUp</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={handleChange} />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>OR</p>
          <Button className="w-100" type="submit" onClick={signInWithGoogle}>
            Sign Up with Google
          </Button>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an accout? login
      </div>
    </>
  );
};
export default SignIn;
