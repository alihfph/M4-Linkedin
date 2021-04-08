import React from "react";
import {
  Col,
  Row,
  Card,
  Container,
  ListGroup,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import moment from "moment";
import Adv from "./Adv";
import "./styles/profile.css";

class Profile extends React.Component {
  state = {
    show: false,
    myProfile: [],
    relatedProfiles: [],
    suggestedProfiles: [],
    experiences: [],
    body: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
  };

  componentDidMount = async () => {
    await this.fetchMe();
    await this.getExp();
    await this.catchThemAll();
  };

  catchThemAll = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
          },
        }
      );
      if (response.ok) {
        let allProfiles = await response.json();
        this.setState({ relatedProfiles: allProfiles.slice(95, 100) });
        this.setState({ suggestedProfiles: allProfiles.slice(100, 105) });
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchMe = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
          },
        }
      );
      if (response.ok) {
        let myProfile = await response.json();
        this.setState({ myProfile });
        console.log(this.state.myProfile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getExp = async (id) => {
    try {
      if (id) {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${this.state.myProfile._id}/experiences/` +
            id,
          {
            headers: {
              Authorization: `Bearer ${this.props.bearer}`,
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          // this.setState({ experiences: data });

          this.setState({
            body: data,
          });
          console.log(this.state.body);
        }
      } else {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${this.state.myProfile._id}/experiences`,
          {
            headers: {
              Authorization: `Bearer ${this.props.bearer}`,
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({ experiences: data });
          console.log(this.state.experiences);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteItem = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.myProfile._id}/experiences/` +
          id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
          },
        }
      );
      if (response.ok) {
        alert("Experience deleted");
        this.getExp();
      } else {
        alert("Error in the delete process");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchDataAndShowModal = (id) => {
    this.handleShow();
    this.getExp(id);
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  onHide = () => {
    this.setState({ show: false });
    this.setState({ body: {} });
  };
  postExp = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.myProfile._id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(this.state.body),
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Experiences ADDED");
        this.getExp();
        this.setState({
          body: {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: "",
          },
        });
      } else {
        alert("You failed to add experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  editExp = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.state.myProfile._id}/experiences/` +
          id,
        {
          method: "PUT",
          body: JSON.stringify(this.state.body),
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Experiences ADDED");
        this.getExp();
        this.setState({
          body: {},
        });
      } else {
        alert("You failed your edit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={9} style={{ marginTop: "5vh" }}>
            <Card>
              <Card.Img
                variant="top"
                src="https://coverfiles.alphacoders.com/372/37275.jpg"
                style={{ objectFit: "cover" }}
                alt="placeholder"
              />
              <Card.Body>
                <div>
                  <div style={{ marginTop: "-130px" }}>
                    <img
                      src={this.state.myProfile.image}
                      alt="placeholder"
                      height="160px"
                      width="160px"
                      style={{
                        borderRadius: "50%",
                        border: "4px solid white",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                </div>

                <Card.Text>
                  <Row>
                    <Col xs={12}>
                      {this.state.myProfile.name} {this.state.myProfile.surname}
                    </Col>
                    <Col xs={12}>{this.state.myProfile.bio} </Col>
                    <Col xs={12}>{this.state.myProfile.area}</Col>
                    <Col xs={12}>
                      <p>42 connections</p> <p> Contact info</p>
                    </Col>
                    <Col style={{ display: "flex" }} xs={4} md={12}>
                      <div>
                        <button className="pButton openToButton">
                          Open to
                        </button>
                        <button className="pButton greyButton">
                          Add profile section
                        </button>
                        <button className="greyButton">More...</button>
                      </div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="Experiences">
              <div>
                <Row>
                  <Col className="d-flex justify-content-between" xs={12}>
                    <h5 className="mt-2 ml-3 font-weight-bold">Experiences</h5>
                    <img
                      onClick={() => this.handleShow()}
                      height={40}
                      alt="plus-ico"
                      src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"
                    />
                  </Col>
                </Row>
              </div>
              {this.state.experiences.length > 0 &&
                this.state.experiences.map((experience) => (
                  <div className="mt-3" key={experience._id}>
                    <Row>
                      <Col xs={5}>
                        <strong>{experience.company}</strong>
                        <p>{experience.description}</p>
                      </Col>
                      <Col xs={5}>
                        <div className="text-muted">
                          <p>
                            {moment(experience.startDate).format(
                              "MMMM Do YYYY"
                            )}
                            {" - "}
                            {moment(experience.endDate).format("MMMM Do YYYY")}
                          </p>
                        </div>
                      </Col>
                      <Col xs={1}>
                        <button
                          onClick={() =>
                            this.fetchDataAndShowModal(experience._id)
                          }
                        >
                          Edit
                        </button>
                        <button onClick={() => this.deleteItem(experience._id)}>
                          DELETE
                        </button>
                      </Col>
                    </Row>
                  </div>
                ))}
            </div>
            <div className="Skills">skills will be fetched here</div>
          </Col>
          <Col
            md={3}
            style={{ marginTop: "5vh" }}
            className="d-none d-md-block"
          >
            <ListGroup style={{ width: "299px" }}>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <div style={{ marginTop: "20px" }}>
              <Adv />
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                width: "299px",
              }}
            >
              <div>
                <ListGroup>
                  {this.state.relatedProfiles.length > 0 &&
                    this.state.relatedProfiles.map((user) => {
                      return (
                        <div
                          style={{ width: "299px" }}
                          key={user._id}
                          className="proPic"
                        >
                          <img
                            height={40}
                            src={user.image}
                            alt="user profile image"
                          />
                          <p>
                            {user.name} {user.surname}
                          </p>
                        </div>
                      );
                    })}
                </ListGroup>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                width: "299px",
              }}
            >
              <div>
                <ListGroup>
                  {this.state.suggestedProfiles.length > 0 &&
                    this.state.suggestedProfiles.map((user) => {
                      return (
                        <div
                          style={{ width: "299px" }}
                          key={user._id}
                          className="proPic"
                        >
                          <img
                            height={40}
                            src={user.image}
                            alt="user profile image"
                          />
                          <p>
                            {user.name} {user.surname}
                          </p>
                        </div>
                      );
                    })}
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.postExp();
              }}
            >
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      body: {
                        ...this.state.body,
                        role: e.target.value,
                      },
                    })
                  }
                  value={this.state.body.role}
                  type="text"
                  placeholder="role"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      body: { ...this.state.body, company: e.target.value },
                    })
                  }
                  value={this.state.body.company}
                  type="text"
                  placeholder="company"
                />
              </Form.Group>
              <Row>
                <Col>
                  <label> Start Date</label>
                  <input
                    onChange={(e) =>
                      this.setState({
                        body: { ...this.state.body, startDate: e.target.value },
                      })
                    }
                    value={this.state.body.startDate}
                    type="date"
                  />
                </Col>
                <Col>
                  <label>End Date</label>
                  <input
                    onChange={(e) =>
                      this.setState({
                        body: { ...this.state.body, endDate: e.target.value },
                      })
                    }
                    value={this.state.body.endDate}
                    type="date"
                  />
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      body: { ...this.state.body, description: e.target.value },
                    })
                  }
                  value={this.state.body.description}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      body: { ...this.state.body, area: e.target.value },
                    })
                  }
                  value={this.state.body.area}
                  type="text"
                  placeholder="area"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.onHide()}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => this.postExp(e)}>
              Save Changes
            </Button>
            <Button
              variant="primary"
              onClick={() => this.editExp(this.state.body._id)}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default Profile;
