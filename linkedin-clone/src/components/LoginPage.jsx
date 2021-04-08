import { Form, Button, Container } from "react-bootstrap";
import React from "react";

export default class Login extends React.Component {
  state = {
    password: "",
    username: "",
  };
  logUser = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/account/login",
        {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const res = await response.json();
        const access_token = await res.access_token;

        localStorage.setItem("token", access_token);
        this.props.history.push("/feed");
        alert("logged in successfully!");
        this.setState({
          password: "",
          username: "",
        });

        console.log(res);
      } else {
        alert("ERROR!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div
        id="login-main-container"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <div className="login-top-container d-flex align-items-center justify-content-start">
            <div className="login-title d-flex mb-3">
              <h4>LinkedIn</h4>
            </div>
          </div>
          <div className="login-content-container mb-5">
            <div className="mb-4">
              <h2 className="mb-1">Sign in</h2>
              <p className="mb-0">Stay updated on your professional world</p>
            </div>
            <div className="d-flex flex-column">
              <div className="login-input-wrap mb-4">
                <p className="login-label mb-0">username</p>
                <input
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      username: e.target.value,
                    })
                  }
                  value={this.state.username}
                  type="text"
                ></input>
              </div>
              <div className="login-input-wrap mb-2">
                <p className="login-label mb-0">Password</p>
                <input
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      password: e.target.value,
                    })
                  }
                  value={this.state.password}
                  type="password"
                ></input>
              </div>

              <button className="sign-in-btn" onClick={this.logUser}>
                Sign in
              </button>
            </div>
          </div>
          <div className="text-center">
            <p>New to LinkedIn? </p>
          </div>
        </div>
      </div>
    );
  }
}
