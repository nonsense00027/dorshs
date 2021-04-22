import React from "react";
import { Button } from "@material-ui/core";

function Teacher() {
  const handleLogin = () => {};
  return (
    <div className="base-container">
      <div className="header">
        <h2>Teacher Login</h2>
      </div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>
                <h4>Teacher Username</h4>
              </label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label>
                <h4> Password</h4>
              </label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <Button className="login-button" fullWidth type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
