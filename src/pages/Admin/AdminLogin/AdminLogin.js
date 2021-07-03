import React, { useState, useEffect } from "react";
import "./AdminLogin.css";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import logo from "../../../img/logo.svg";
import { useUserContext } from "../../../context/UserContext";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function AdminLogin() {
  const { userLogin } = useUserContext();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(null);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (password === settings.password) {
      userLogin({ name: "administrator", role: "admin" });
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setError(false);
    setPassword(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db.collection("admin").onSnapshot((snapshot) => {
      setSettings(snapshot.docs.map((doc) => collectIdsAndDocs(doc))[0]);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

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
