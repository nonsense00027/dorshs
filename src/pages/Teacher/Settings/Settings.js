import React, { useState } from "react";
import "./Settings.css";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import MuiAlert from "@material-ui/lab/Alert";
import { useUserContext } from "../../../context/UserContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Settings({ student }) {
  const { user } = useUserContext();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const isMatch = () => {
    return password === confirmPassword;
  };

  const handleChangePassword = () => {
    db.collection("sections")
      .doc(user.id)
      .set({ password: password }, { merge: true })
      .then((result) => {
        setSnackbarOpen(true);
        setPassword("");
        setConfirmPassword("");
      });
  };

  return (
    <div className="settings">
      <div className="settings__header">
        <h2>Security</h2>
      </div>
      <div className="row">
        <div className="col">
          <p>New password:</p>
          <TextField
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Confirm new password:</p>
          <TextField
            variant="outlined"
            type="password"
            error={error}
            helperText={error && "Password does not match"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            variant="contained"
            disableElevation
            disabled={password !== confirmPassword || password.length < 5}
            onClick={() => handleChangePassword()}
          >
            Change password
          </Button>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Password has been change successfully.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Settings;
