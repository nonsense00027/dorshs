import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Student({ setOpen }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {};
  return (
    <div className="base-container">
      <div className="login__header">
        <h2>Student Login</h2>
      </div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <p>Student Username:</p>
              <TextField
                required
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p>Password:</p>
              <TextField
                required
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="login-button" fullWidth type="submit">
              Login
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
