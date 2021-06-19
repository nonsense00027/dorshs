import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Landing from "./pages/Landing/Landing";
import Enrollment from "./pages/Enrollment/Enrollment";
import Admin from "./pages/Admin/Admin";
import StepC from "./pages/Enrollment/StepC";
import Dashboard from "./pages/Student/Dashboard/Dashboard";
import Student from "./pages/Student/Student";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/enrollment">
            <Enrollment />
          </Route>
          <Route path="/student/:lrn">
            <Student />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
