import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React from "react";

export default class Registration extends React.Component {
  state = {
    area: "",
    bio: "",
    email: "",
    image:
      "https://i.pinimg.com/736x/0c/45/2c/0c452ca459fcf28b3c3b5322d11cbc62.jpg",
    name: "",
    password: "",
    surname: "",
    title: "",
    username: "",
  };

  registerUser = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/account/register",
        {
          method: "POST",
          body: JSON.stringify(this.state.appointment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("appointment saved!");
        this.setState({
          appointment: {
            name: "",
            description: "",
            price: 0,
            time: "",
          },
        });
        this.fetchData();
      } else {
        alert("ERROR!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container>
        <h1 className="text-center py-4">
          Make the most of your professional life
        </h1>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="pt-4">
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
                <Form.Control
                  placeholder="About you..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="City, Region, Country" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
