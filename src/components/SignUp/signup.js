import React , { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

class SignUp extends Component {
  state ={
  email:'',
  password:'',
  }
  
  handleChange = (e) =>{
    this.setState({
    [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) =>{
    console.log(e);
  }

  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4  ">SignUp</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group id ="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control id="email" type="email" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group id ="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control id="password" type="password" onChange={this.handleChange}/>
              </Form.Group>
              <Button className="w-100" type="submit">Sign-Up</Button>
            </Form>
          </Card.Body>
        </Card>
  
        <div className="w-100 text-center mt-2">
          Already have an accout? login
        </div>
      </>
    );
  }
}

export default SignUp