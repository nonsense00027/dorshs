import React, { useState } from "react";
import "./AdminLogin.css";
import { Button, TextField } from "@material-ui/core";
import logo from "../../../img/rslogo.png";
import { useUserContext } from "../../../context/UserContext";

function AdminLogin() {
  const { userLogin } = useUserContext();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (password === "adminpass") {
      userLogin({ name: "administrator", role: "admin" });
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setError(false);
    setPassword(e.target.value);
  };
  return (
    <div className="adminLogin">
      <div className="adminLogin__card">
        <form onSubmit={handleAdminLogin}>
          <img src={logo} alt="" />
          <h3>Welcome Admin</h3>
          <p>Password:</p>
          <TextField
            required
            autoFocus
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="adminLogin__button"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
          {error && <p className="adminLogin__error">Invalid Password</p>}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
