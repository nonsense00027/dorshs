import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Landing from "./pages/Landing/Landing";
import Enrollment from "./pages/Enrollment/Enrollment";
import Welcome from "./pages/Welcome/Welcome";
import Admin from "./pages/Admin/Admin";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import { AdminProvider } from "./context/AdminContext";
import FAQ from "./pages/Landing/FAQ";
import About from "./pages/Landing/About/About";
import Resources from "./pages/Landing/Resources/Resources";

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/resources" component={Resources}>
            <Resources />
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
