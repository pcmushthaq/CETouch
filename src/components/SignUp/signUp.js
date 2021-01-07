import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;

    createNewUser({
      email: email,
      password: password,
      displayName: name,
    }).then(() => {
      history.push("/home");
    });
  };

  const createNewUser = async ({ email, password, displayName }) => {
    await firebase.createUser({ email, password }, { displayName, email });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4  ">Sign Up</h2>
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
            <Form.Group id="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register({ required: true, minLength: 4 })}
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
            <Form.Group id="Confirm password">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                type="password"
                name="confirmPassword"
                ref={register({ required: true, minLength: 6 })}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an accout?</div>
      <Link to="/"> Log In</Link>
    </>
  );
};
export default SignUp;
