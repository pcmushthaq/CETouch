import React from "react";
import SignIn from "../../components/SignUp/signup";
import { Container } from "react-bootstrap";
function Signup() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignIn />
      </div>
    </Container>
  );
}

export default Signup;
