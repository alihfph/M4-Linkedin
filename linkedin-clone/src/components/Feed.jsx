import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Adv from "./Adv";
import PostMaker from "./PostMaker";
import ContentLoader, { Facebook } from "react-content-loader";
import "./styles/feed.css";
class Feed extends React.Component {
  state = {
    posts: [],
  };
  MyFacebookLoader = () => <Facebook />;
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/register");
  };
  // https: //striveschool-api.herokuapp.com/api/posts/
  getPosts = async () => {
    console.log("getting posts");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ posts: data });
        console.log(this.state.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getPosts();
    this.props.fetch();
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row style={{ marginTop: "5vh", justifyContent: "space-evenly" }}>
            <Col xs={2}>
              <Card className="sidebar">
                <Card.Img
                  variant="top"
                  src="https://coverfiles.alphacoders.com/372/37275.jpg"
                />
                <div className="proPicContainer">
                  <img
                    onClick={() => this.props.history.push("/user/me")}
                    className="profPic"
                    src={this.props.state.data.image}
                  />
                  <h6>
                    {this.props.state.data.name} {this.props.state.data.surname}
                  </h6>
                </div>
                <Card.Body>
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
            <Col xs={6}>
              <PostMaker />
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
              {this.MyFacebookLoader()}
            </Col>
            <Col className="d-none d-xl-block" xs={3}>
              <Adv />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Feed;
