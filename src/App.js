import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Landing from "./pages/Landing/Landing";
import Enrollment from "./pages/Enrollment/Enrollment";
import Admin from "./pages/Admin/Admin";
import StepC from './pages/Enrollment/StepC';

function App() {
  return (
    <div className="app">
      <Router>
      <div className="app">
        <Switch>
          <Route path="/enrollment">
            <Enrollment />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/"> 
            <StepC />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
