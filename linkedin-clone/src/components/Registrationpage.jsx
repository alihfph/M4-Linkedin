import { Form, Button, Container } from "react-bootstrap";
import React from "react";

export default class Registration extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formGridSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control placeholder="Surname" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formGridJobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control placeholder="Job Title" />
          </Form.Group>

          <Form.Group controlId="Form.ControlTextarea1.About">
            <Form.Label>About you</Form.Label>
            <Form.Control placeholder="About you..." as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="City, Region, Country" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
