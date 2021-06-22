import React, { useState } from "react";
import logo from "../../img/rslogo.png";
import { Button, Container, Dialog, DialogContent } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Authentication/Login";
import { useUserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import FAQ from './FAQ';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const getButton = (user, setOpen, history) => {
  console.log("USER IN NAVBARR", user);
  if (user) {
    return (
      <Button
        variant="contained"
        onClick={() => history.push(`/student/${user.lrnNo}`)}
      >
        Account
        <ExitToAppIcon />
      </Button>
    );
  } else {
    return (
      <Button variant="contained" onClick={() => setOpen(true)}>
        Login
        <ExitToAppIcon />
      </Button>
    );
  }
};

function Navbar() {
  const { user } = useUserContext();
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <Container>
        <div className="navbar__left">
          <img src={logo} alt="logo" />
          <p>
            DAVAO ORIENTAL REGIONAL
            <br />
            SCIENCE HIGH SCHOOL
          </p>
        </div>

        <div className="navbar__right">
          <p className="navbar__links" onClick={() => history.push("/")}>
            Home
          </p>
          <p className="navbar__links" onClick={() => history.push("/about")}> 
            About
          </p>
          <p className="navbar__links" onClick={() => history.push('/resources')}>Resources</p>
          <p className="navbar__links" onClick={() => history.push("/FAQ")}>FAQ</p>
          {getButton(user, setOpen, history)}
        </div>
      </Container>

      <Dialog
        className="login__dialog"
        maxWidth="xs"
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogContent>
          <Login setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Navbar;
