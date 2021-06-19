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
import EventSeatIcon from "@material-ui/icons/EventSeat";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import logo from "../../img/rslogo.png";
import { useUserContext } from "../../context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar({ activeTab, handleTabChange }) {
  const { userLogout } = useUserContext();
  const classes = useStyles();
  const [tabs, setTabs] = useState([
    { id: 0, label: "Dashboard", icon: <DashboardIcon /> },
    { id: 1, label: "Assessments", icon: <AssessmentIcon /> },
    { id: 2, label: "Students", icon: <PersonIcon /> },
    { id: 3, label: "Teachers", icon: <SupervisorAccountIcon /> },
    { id: 4, label: "Subjects", icon: <DnsIcon /> },
    { id: 5, label: "Sectioning", icon: <EventSeatIcon /> },
    { id: 6, label: "Settings", icon: <SettingsIcon /> },
  ]);

  const handleLogout = () => {
    userLogout();
    handleTabChange(0);
    // history.push("/");
  };

  return (
    <div className="sidebar">
      {/* <div className="sidebar__header">
        <div className="sidebar__logo">
          <img src={logo} alt="" />
        </div>
      </div> */}
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {tabs.map((tab) => (
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
        </List>
      </div>
    </div>
  );
}
