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
import Adv from "./Adv";
import RelatedUsers from "./RelatedUsers";
import "./styles/profile.css";
class Profile extends React.Component {
  state = {
    myProfile: [],
    show: false,
    body: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area:""
    }
  };
  componentDidMount = async () => {
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
        console.log(myProfile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  onHide = () => {
    this.setState({ show: false });
  };
  postExp = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/:userId/experiences",
        {
          method: "POST",
          body: JSON.stringify(this.state.body)
          headers: {
            Authorization: `Bearer ${this.props.bearer}`,
            Content-Type: Application/Json
          },
        }
      );
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
              <Row>
                <Col className="alignToTheRight" xs={12}>
                  <img
                    onClick={() => this.handleShow()}
                    height={40}
                    alt="plus-ico"
                    src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"
                  />
                </Col>
              </Row>
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
              <RelatedUsers />
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                width: "299px",
              }}
            >
              <RelatedUsers />
            </div>
          </Col>
        </Row>

        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="role" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="company" />
              </Form.Group>
              <Row>
                <Col>
                  <label> Start Date</label>
                  <input type="date" />
                </Col>
                <Col>
                  <label>End Date</label>
                  <input type="date" />
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control type="text" placeholder="area" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.onHide()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.onHide()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default Profile;
