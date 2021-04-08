import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import NavBar from "./NavBar";
import "./styles/feed.css";
class Feed extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/register");
  };
  componentDidMount() {
    this.props.fetch();
    console.log(this.props.state.data);
  }
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Row style={{ marginTop: "5vh" }}>
            <Col xs={2} md={3}>
              <Card className="sidebar">
                <Card.Img
                  variant="top"
                  src="https://coverfiles.alphacoders.com/372/37275.jpg"
                />
                <div className="proPicContainer">
                  <img className="profPic" src={this.props.state.data.image} />
                  <h6>
                    {this.props.state.data.name} {this.props.state.data.surname}
                  </h6>
                </div>
                <Card.Body className="noPadding">
                  <Card.Text>
                    <div className="sidebarInfo">
                      <br />
                      <p className="text-muted">
                        {this.props.state.data.title}
                      </p>

                      <div>
                        <hr style={{ width: "auto" }} />
                        <strong className="text-muted">Connections</strong>
                        <p>Grow your connections</p>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={9}>
              <Container fluid></Container>
            </Col>
            <Col xs="d-none" md={3}></Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Feed;
