import React, { useState } from "react";
import logo from "../../img/rslogo.png";
import { Button, Container, Dialog, DialogContent } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../Authentication/Login";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <Container>
        <div className="navbar__left">
          <img src={logo} alt="logo" />
          <p>
            DAVAO ORIENTAL REGIONAL
            <br />
            SCIENCE HIGH SHCOOL
          </p>
        </div>

        <div className="navbar__right">
          <p className="home">Home</p>
          <p>About</p>
          <p>Resources</p>
          <p>FAQ</p>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Login
            <ExitToAppIcon />
          </Button>
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
