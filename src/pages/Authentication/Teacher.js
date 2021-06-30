import React, { useState } from "react";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";

function Teacher({ setOpen }) {
  const { userLogin } = useUserContext();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("username", username);
    let findUser = username.charAt(0).toUpperCase() + username.slice(1);
    console.log(findUser);
    setLoading(true);
    db.collection("sections")
      .where("name", "==", findUser)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          const foundUser = snapshot.docs.map((doc) =>
            collectIdsAndDocs(doc)
          )[0];
          if (foundUser.password) {
            if (foundUser.password === password) {
              userLogin({ ...foundUser, role: "teacher" });
              setLoading(false);
              history.push(`/teacher/${foundUser.id}`);
            } else {
              setError("Invalid password");
              setLoading(false);
            }
          } else {
            userLogin({ ...foundUser, role: "teacher" });
            setLoading(false);
            history.push(`/teacher/${foundUser.id}`);
          }
        } else {
          setError("User not found");
          setLoading(false);
        }
        // setNewEnrollees(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        // setStudentsLoading(false);
      });
  };

  return (
    <div className="base-container">
      <div className="login__header">
        <h2>Teacher Login</h2>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
      </div>
    </div>
  );
}

export default Teacher;
