import React from "react";
import { Avatar } from "@material-ui/core";
import logo from "../../img/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <h3>
          Davao Oriental Regional <br />
          Science High School
        </h3>
      </div>
      <div className="header__right">
        <Avatar className={classes.large} src="nonsense" alt="nonsense" />
      </div>
    </div>
  );
}

export default Header;
