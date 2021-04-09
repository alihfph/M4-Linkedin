import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import Adv from "./Adv";
import PostMaker from "./PostMaker";
import ContentLoader, { Facebook } from "react-content-loader";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import "./styles/feed.css";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteSweep } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { FacebookSelector, FacebookCounter } from "@charkour/react-reactions";

class Feed extends React.Component {
  state = {
    show: false,
    posts: [],
    body: {
      text: "",
      image: "",
      _id: "",
    },
  };
  MyFacebookLoader = () => <Facebook />;
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/register");
  };
  fetchDataAndShowModal = (id) => {
    this.handleShow();
    this.getPosts(id);
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  onHide = () => {
    this.setState({ show: false });
    this.setState({ body: {} });
  };
  // https: //striveschool-api.herokuapp.com/api/posts/
  editPost = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + id,
        {
          method: "PUT",
          body: JSON.stringify(this.state.body),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Your post was edited successfully😎");
        this.getPosts();
        this.setState({
          body: {},
        });
      } else {
        toast.error("You cannot edit other people posts!🧐");
      }
    } catch (error) {
      console.log(error);
    }
  };
  deletePost = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + id,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        alert("Post deleted");
        this.getPosts();
      } else {
        toast.error(
          "What are you trying to do?!🤌🏼 You cannot delete other people posts 🤦🏼 "
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  getPosts = async () => {
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
        toast("Initializing content..", {
          icon: "⏳",
        });
        let data = await response.json();
        this.setState({
          posts: data.filter((post) => post.user).slice(460, 480),
        });
        // console.log(data);
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
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              // Define default options
              className: "",
              style: {
                margin: "40px",
                background: "#363636",
                color: "#fff",
                zIndex: 1,
              },
              duration: 5000,
              // Default options for specific types
            }}
          />
          <Row style={{ marginTop: "5vh", justifyContent: "space-evenly" }}>
            <Col xs={2}>
              <Card className="sidebar">
                <Card.Img
                  draggable="false"
                  variant="top"
                  src="https://coverfiles.alphacoders.com/372/37275.jpg"
                />
                <div className="proPicContainer">
                  <img
                    draggable="false"
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
              {console.log(this.state.posts.length)}

              {!this.state.posts.length > 0 ? (
                <Container>
                  <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                  <div style={{ marginBottom: "50px" }}>
                    {this.MyFacebookLoader()}
                  </div>
                </Container>
              ) : (
                ((
                  <div>
                    {setTimeout(() => {
                      toast.success("Content loaded successfully!");
                    }, 1000)}
                  </div>
                ),
                this.state.posts.map((post) => {
                  return (
                    <div className="postCard">
                      <p className="postTime">
                        {moment(post.createdAt).fromNow()}
                      </p>
                      <div className="options">
                        <BsThreeDotsVertical />
                        <MdDeleteSweep
                          onClick={() => this.deletePost(post._id)}
                          className="optionDel"
                        />
                        <RiEditBoxFill
                          onClick={() => this.fetchDataAndShowModal(post._id)}
                          className="optionEdit"
                        />
                      </div>
                      <div className="rope">
                        <img
                          draggable="false"
                          className="avatar"
                          src={
                            post.user
                              ? post.user.image
                              : "https://www.sunchem.nl/wp-content/uploads/H_About/Teamphotos/profile-placeholder.jpg"
                          }
                        />
                        <div className="userTag">
                          <h4>{post.user.name + " " + post.user.surname} </h4>
                          <p className="text-muted tag">
                            {"@" + post.username}
                          </p>
                        </div>
                      </div>
                      <p
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {post.text && post.text}
                      </p>
                      <br />
                      {post.image && (
                        <img
                          draggable="false"
                          alt={post._id}
                          src={post.image}
                          height={200}
                        />
                      )}
                      <hr />
                      <div className="rope">
                        <FacebookCounter />
                        {/* <FacebookSelector /> */}
                      </div>
                    </div>
                  );
                }))
              )}
            </Col>
            <Col className="d-none d-xl-block" xs={3}>
              <Adv />
            </Col>
          </Row>
          <Modal show={this.state.show}>
            <Modal.Header closeButton={this.onHide}>
              <Modal.Title>
                {this.state.body._id ? "Edit " : "Add "}experience
              </Modal.Title>
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
                          body: {
                            ...this.state.body,
                            startDate: e.target.value,
                          },
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
                        body: {
                          ...this.state.body,
                          description: e.target.value,
                        },
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
                        body: { ...this.state.body, text: e.target.value },
                      })
                    }
                    value={this.state.body.text}
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

              <Button
                variant="primary"
                onClick={() => this.editPost(this.state.body._id)}
              >
                Edit
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}
export default Feed;
