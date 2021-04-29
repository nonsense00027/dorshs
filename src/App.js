import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Landing from "./pages/Landing/Landing";
import Enrollment from "./pages/Enrollment/Enrollment";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/enrollment">
            <Enrollment />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
