import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function Teacher({ setOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {};
  return (
    <div className="base-container">
      <div className="login__header">
        <h2>Teacher Login</h2>
      </div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <p>Teacher Username</p>
              <TextField
                required
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p> Password</p>
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
      </div>
    </div>
  );
}

export default Teacher;
