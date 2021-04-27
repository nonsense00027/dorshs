import React from "react";
import './Authentication.css';
import { Button } from '@material-ui/core';

function Admin() {
  return (
    <div className="base-container">
    <div className="header">
    <h2>Admin's Login</h2>
    </div>
    <div className="content">
      
      <div className="form">
        <div className="form-group">
          <label><h4>Admin's Username</h4></label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label><h4>Admin's Password</h4></label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footer">
    <Button variant="contained" color="primary">
     Login
    </Button>
    </div>
  </div>
);
}


export default Admin;
