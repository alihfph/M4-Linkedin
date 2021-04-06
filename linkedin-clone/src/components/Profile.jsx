import React from "react";
import {
  Col,
  Row,
  Card,
  Dropdown,
  DropdownButton,
  Container,
  ListGroup,
} from "react-bootstrap";
import Adv from "./Adv";
import RelatedUsers from "./RelatedUsers";
import "./styles/profile.css";
class Profile extends React.Component {
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
                      src="https://orthosera.com/wp-content/uploads/2016/02/user-profile-placeholder.png"
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
                    <Col xs={12}>Bagnolo in Piano, Emilia-Romagna, Italy</Col>
                    <Col xs={12}>
                      <p>42 connections</p> <p> Contact info</p>
                    </Col>
                    <Col style={{ display: "flex" }} xs={4} md={12}>
                      <div>
                        {" "}
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
            <div className="Experiences">experiences will be fetched here</div>
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
      </Container>
    );
  }
}
export default Profile;
