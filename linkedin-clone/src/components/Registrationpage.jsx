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
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Registration was successful!");
        this.setState({
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
        });
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.registerUser();
              }}
            >
              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      name: e.target.value,
                    })
                  }
                  value={this.state.name}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      surname: e.target.value,
                    })
                  }
                  value={this.state.surname}
                  type="text"
                  placeholder="Surname"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      email: e.target.value,
                    })
                  }
                  value={this.state.email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      username: e.target.value,
                    })
                  }
                  value={this.state.username}
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      password: e.target.value,
                    })
                  }
                  value={this.state.password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      title: e.target.value,
                    })
                  }
                  value={this.state.title}
                  placeholder="Job Title"
                />
              </Form.Group>

              <Form.Group controlId="Form.ControlTextarea1.About">
                <Form.Label>About you</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      bio: e.target.value,
                    })
                  }
                  value={this.state.bio}
                  placeholder="About you..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      area: e.target.value,
                    })
                  }
                  value={this.state.area}
                  placeholder="City, Region, Country"
                />
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
