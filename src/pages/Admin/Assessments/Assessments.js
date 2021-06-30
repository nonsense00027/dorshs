import React, { useState } from "react";
import "./Assessments.css";
import AssessmentsTable from "./AssessmentsTable";
import { useAdminContext } from "../../../context/AdminContext";
import { TextField, MenuItem, Paper, Tabs, Tab } from "@material-ui/core";

function Assessments() {
  const { students } = useAdminContext();
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState("all");

  const getNewEnrollees = () => {
    return students.filter((student) => student.newEnrollee);
  };

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  const getStudents = () => {
    let filteredStudents;
    switch (active) {
      case 0:
        filteredStudents = students.filter(
          (student) => student.newEnrollee === true
        );
        break;
      case 1:
        filteredStudents = students.filter(
          (student) =>
            student.newEnrollee === false && student.enrolling === true
        );
        break;
      default:
        console.log("error");
    }
    if (category !== "all") {
      filteredStudents = filteredStudents.filter(
        (student) => student.enrollLevel === category
      );
    }
    return filteredStudents;
  };

  console.log(getStudents());

  return (
    <div className="assessments">
      <div className="assessments__tabContainer">
        <Paper square>
          <Tabs
            value={active}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="New Student" />
            <Tab label="Old Student" />
          </Tabs>
        </Paper>
      </div>
      <div className="assessments__selector">
        <h4>Category:</h4>
        <TextField
          id="standard-select-currency"
          select
          size="small"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"GRD7"}>Grade 7</MenuItem>
          <MenuItem value={"GRD8"}>Grade 8</MenuItem>
          <MenuItem value={"GRD9"}>Grade 9</MenuItem>
          <MenuItem value={"GRD10"}>Grade 10</MenuItem>
          <MenuItem value={"GRD11"}>Grade 11</MenuItem>
          <MenuItem value={"GRD12"}>Grade 12</MenuItem>
          {active === 0 && <MenuItem value={"TRANSFEREE"}>Transferee</MenuItem>}
        </TextField>
      </div>
      <AssessmentsTable enrollees={getStudents()} />
    </div>
  );
}

export default Assessments;
