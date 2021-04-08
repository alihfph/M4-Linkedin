import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Registration from "./components/Registrationpage";
import Login from "./components/LoginPage";
import React from "react";
import Feed from "./components/Feed";

class App extends React.Component {
  state = {
    bearer: "",
    data: {
      area: "",
      bio: "",
      email: "",
      image:
        "https://i.pinimg.com/736x/0c/45/2c/0c452ca459fcf28b3c3b5322d11cbc62.jpg",
      name: "",
      password: "",
      surname: "",
      title: "",
      username: "",
    },
  };
  updateBearer = (hi2) => {
    this.setState({ bearer: hi2 });
    if (this.state.bearer !== "") {
      this.props.history.push("/");
    }
  };
  updateState = (subState) => {
    this.setState({ data: subState });
  };
  render() {
    return (
      <>
        <Route exact path="/">
          <NavBar />
          <Profile bearer={this.state.bearer} />
        </Route>
        <Route exact path="/feed" render={(props) => <Feed {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => (
            <Registration
              {...props}
              {...this.state}
              setState={this.updateState}
              setState2={this.updateBearer}
            />
          )}
        />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
      </>
    );
  }
}

export default withRouter(App);
