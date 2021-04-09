import React from "react";
import { Form } from "react-bootstrap";

class PostMaker extends React.Component {
  state = {
    posts: [],
    post: {
      text: "",
    },
    image: null,
  };

  uploadPost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.post),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Post added");
        // this.uploadImage();
        this.props.fetch();
        console.log(this.state.post);
        this.setState({ post: { text: "" } });
      } else {
        alert("Failed to add the post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  uploadImage = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          // body: data,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data;",
          },
        }
      );
      if (response.ok) {
        alert("Image added");
        console.log(this.state.image);
      } else {
        alert("Failed to add the image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div style={{ minHeight: "10vh", backgroundColor: "white" }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group controlId="textarea">
            <Form.Control
              as="textarea"
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.post, text: e.target.value },
                })
              }
              value={this.state.post.text}
              placeholder="Start a post"
              rows={1}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.File
              id="postimage"
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.image, image: e.target.value },
                })
              }
              value={this.state.image}
              label="Upload image"
            />
          </Form.Group> */}
          <button onClick={() => this.uploadPost()}>Post</button>
        </Form>
      </div>
    );
  }
}
export default PostMaker;
