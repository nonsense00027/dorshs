import React from "react";
import "./Information.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SchoolInfo from "./SchoolInfo";
import StudentInfo from "./StudentInfo";
import ParentInfo from "./ParentInfo";
import Household from "./Household";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs({ student }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          variant="fullWidth"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Grade Level And School Information" {...a11yProps(0)} />
          <Tab label="Student Information" {...a11yProps(1)} />
          <Tab label="Parent/ Guardian Information " {...a11yProps(2)} />
          <Tab
            label="Household Capacity And Access To Distance Learning"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SchoolInfo student={student} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StudentInfo student={student} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ParentInfo student={student} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Household student={student} />
      </TabPanel>
    </div>
  );
}
