import React, { useState, useEffect } from "react";
import "./Settings.css";
import { TextField, Button, Snackbar, Switch } from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import MuiAlert from "@material-ui/lab/Alert";
import { collectIdsAndDocs } from "../../../shared/utilities";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Settings({ student }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [settings, setSettings] = useState({});

  const isMatch = () => {
    return password === confirmPassword;
  };

  const handleChangePassword = () => {
    db.collection("admin")
      .doc(settings.id)
      .set({ password: password }, { merge: true })
      .then((result) => {
        setSnackbarOpen(true);
        setPassword("");
        setConfirmPassword("");
      });
  };

  const handleEnrollmentChanged = (e) => {
    db.collection("admin")
      .doc(settings.id)
      .set({ enrollment: e.target.checked }, { merge: true })
      .then((result) => console.log("toggled"));
  };

  console.log("SETTINGS", settings);

  useEffect(() => {
    const unsubscribe = db.collection("admin").onSnapshot((snapshot) => {
      setSettings(snapshot.docs.map((doc) => collectIdsAndDocs(doc))[0]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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

      <div className="settings__header">
        <h2>Online Enrollment</h2>
      </div>
      <p>Toggle Online Enrollment</p>
      <div className="settings__toggle">
        <p>Off</p>
        <Switch
          // defaultChecked
          checked={settings.enrollment === true}
          color="default"
          onChange={handleEnrollmentChanged}
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <p>On</p>
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
