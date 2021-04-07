import { Form, Button, Container } from "react-bootstrap";
import React from "react";

export default class LoginPage extends React.Component {
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
                <p className="login-label mb-0">Email or Phone</p>
                <input type="email"></input>
              </div>
              <div className="login-input-wrap mb-2">
                <p className="login-label mb-0">Password</p>
                <input type="password"></input>
              </div>

              <button className="sign-in-btn">Sign in</button>
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
