import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const SignIn = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    firebase.login({ email: email, password: password }).then(() => {
      history.push("/profile");
    });
  };

  return (
    <>
      <Card>
        <Card.Body>
          {isLoaded(auth) ? <p></p> : <p>Loading</p>}
          <h2 className="text-center mb-4  ">Sign In</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register({ required: true, minLength: 6 })}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Don't have an account?</div>
      <Link to="/signup"> Sign Up</Link>
    </>
  );
};
export default SignIn;
