import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DnsIcon from "@material-ui/icons/Dns";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logo from "../../img/rslogo.png";
import { useUserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingLeft: 20,
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const getTabs = (status) => {
  if (status) {
    return [
      { id: 0, label: "Dashboard", icon: <AssessmentIcon /> },
      { id: 1, label: "Student Information", icon: <AssessmentIcon /> },
      { id: 2, label: "Requirements", icon: <PersonIcon /> },
    ];
  } else {
    return [
      { id: 0, label: "Dashboard", icon: <AssessmentIcon /> },
      { id: 1, label: "Student Information", icon: <AssessmentIcon /> },
      { id: 2, label: "Requirements", icon: <PersonIcon /> },
      { id: 3, label: "Academic Record", icon: <SupervisorAccountIcon /> },
      { id: 4, label: "Settings", icon: <SettingsIcon /> },
    ];
  }
};

export default function Sidebar({ activeTab, handleTabChange, studentStatus }) {
  const history = useHistory();
  const { user, userLogout } = useUserContext();
  const classes = useStyles();

  const handleLogout = () => {
    userLogout();
    history.push("/");
  };

  return (
    <div className="student__sidebar">
      {/* <div className="sidebar__header">
        <div className="sidebar__logo">
          <img src="https://i.mydramalist.com/2xoPwc.jpg" />
        </div>
      </div> */}
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {getTabs(studentStatus).map((tab) => (
            <ListItem
              className={activeTab === tab.id && `active`}
              button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              <ListItemIcon>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.label} />
            </ListItem>
          ))}
          {user.role !== "admin" && (
            <ListItem
              // className={activeTab === tab.id && `active`}
              button
              key={5}
              onClick={() => handleLogout()}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );
}
