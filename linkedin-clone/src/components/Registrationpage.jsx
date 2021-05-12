// import { Form, Button, Container } from "react-bootstrap";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles/login.css";
import { Link } from "react-router-dom";
export default class Register extends React.Component {
  state = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    username: "",
    image: "",
    bio: "",
  };
  notify = () => toast("Here is your toast.");
  logUser = async () => {
    try {
      console.log("!!!!");
      let response = await fetch("http://localhost:3005/login/signup", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        // const res = await response.json();

        toast.success("Welcome " + this.state.username + "to Linkedin 🥳");

        this.setState({
          firstName: "",
          surname: "",
          email: "",
          password: "",
          username: "",
          image: "",
          bio: "",
        });
        setTimeout(() => {
          this.props.access();
        }, 1000);
      } else {
        toast.error("Something went wrong 🤯👾.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="login">
        <div className="registerForm">
          <div className="titleLogin">
            <div className="textWrap">
              <h2>Register </h2>
              <p>Welcome to Linkedin, where your buisness count</p>
            </div>
          </div>
          <label className="inputLabel">name</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                firstName: e.target.value,
              })
            }
            value={this.state.firstName}
            type="text"
          ></input>
          <label className="inputLabel">surname</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                surname: e.target.value,
              })
            }
            value={this.state.surname}
            type="text"
          ></input>
          <label className="inputLabel">Username</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                username: e.target.value,
              })
            }
            value={this.state.username}
            type="text"
          ></input>
          <label className="inputLabel">Email</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                email: e.target.value,
              })
            }
            value={this.state.email}
            type="text"
          ></input>
          <label className="inputLabel">Password</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                password: e.target.value,
              })
            }
            value={this.state.password}
            type="password"
          ></input>

          <label className="inputLabel">
            Put the link of your profile picture
          </label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                image: e.target.value,
              })
            }
            value={this.state.image}
            type="text"
          ></input>
          <button className="loginButton" onClick={this.logUser}>
            Register
          </button>
          <div className="linkWrap">
            <Link className="link" to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
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

        <img
          draggable="false"
          className="logoIn"
          src="https://www.shareicon.net/data/512x512/2016/07/08/117028_media_512x512.png"
          alt=""
        />
      </div>
    );
  }
}
