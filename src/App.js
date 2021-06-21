import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Landing from "./pages/Landing/Landing";
import Enrollment from "./pages/Enrollment/Enrollment";
import Welcome from "./pages/Welcome/Welcome";
import Admin from "./pages/Admin/Admin";
import StepC from "./pages/Enrollment/StepC";
import Dashboard from "./pages/Student/Dashboard/Dashboard";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import { AdminProvider } from "./context/AdminContext";
import FAQ from "./pages/Landing/FAQ";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminProvider>
              <Admin />
            </AdminProvider>
          </Route>
          <Route path="/teacher/:id">
            <Teacher />
          </Route>
          <Route path="/enrollment/grade7">
            <Enrollment />
          </Route>
          <Route path="/enrollment">
            <Welcome />
          </Route>
          <Route path="/student/:lrn">
            <Student />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/faq">
            <FAQ />
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
