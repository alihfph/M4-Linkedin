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

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={9} style={{ marginTop: "10vh" }}>
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
                    <Col xs={12} lg={6}>
                      <h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 21 21"
                          data-supported-dps="21x21"
                          fill="currentColor"
                          width="21"
                          height="21"
                          focusable="false"
                          style={{ color: "#C37D16" }}
                        >
                          <g>
                            <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25a1.75 1.75 0 110-3.5 1.75 1.75 0 110 3.5zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0011 13v5H8V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4z"></path>
                          </g>
                        </svg>
                      </h3>
                      <div></div>
                      <h6></h6>
                    </Col>
                    <Col lg={6}>
                      <div>
                        {" "}
                        <DropdownButton
                          id="dropdown-basic-button"
                          size="sm"
                          title="Add profile section"
                        >
                          <Dropdown.Item>Intro</Dropdown.Item>
                          <Dropdown.Item>About</Dropdown.Item>
                          <Dropdown.Item>Featured</Dropdown.Item>
                          <Dropdown.Item>Background</Dropdown.Item>
                          <Dropdown.Item>Skills</Dropdown.Item>
                          <Dropdown.Item>Accomplishments</Dropdown.Item>
                          <Dropdown.Item>Additional information</Dropdown.Item>
                          <Dropdown.Item>Supported languages</Dropdown.Item>
                        </DropdownButton>
                        <button>More...</button>
                      </div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={3}
            style={{ marginTop: "10vh" }}
            className="d-none d-md-block"
          >
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
