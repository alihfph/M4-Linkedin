import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Profile />
      </div>
    </Router>
  );
}

export default App;
