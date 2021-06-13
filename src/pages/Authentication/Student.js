import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";
import { findAllByDisplayValue } from "@testing-library/dom";

function Student({ setOpen }) {
  const { userLogin } = useUserContext();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("students")
      .where("lrnNo", "==", username)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          const foundUser = snapshot.docs.map((doc) =>
            collectIdsAndDocs(doc)
          )[0];
          console.log("FOUND", foundUser);
          userLogin(foundUser);
          setLoading(false);
          history.push(`/student/${foundUser.lrnNo}`);
        } else {
          console.log("USER NOT FOUND");
          setLoading(false);
        }
        // setNewEnrollees(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        // setStudentsLoading(false);
      });
  };
  return (
    <div className="base-container">
      <div className="login__header">
        <h2>Student Login</h2>
      </div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <p>Username</p>
              <TextField
                required
                placeholder="Enter Username here"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p>Password</p>
              <TextField
                required
                placeholder="Enter Password here"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="login-button" fullWidth type="submit">
              {loading && <CircularProgress />}Login
            </Button>
            {/* <Button
              fullWidth
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button> */}
          </form>
        </div>

        <p className="student__enrollLabel">
          Not a student yet? Enroll{" "}
          <span onClick={() => history.push("/enrollment")}>here</span>
        </p>
      </div>
    </div>
  );
}

export default Student;
