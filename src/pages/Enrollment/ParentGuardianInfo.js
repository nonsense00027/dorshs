import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import "../Enrollment/Enrollment.css";
import { FormControlLabel, FormGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));

const educationalAttainment = [
  { name: "elementary", label: "Elementary graduate" },
  { name: "highschool", label: "High School graduate" },
  { name: "college", label: "College graduate" },
  { name: "vocational", label: "Vocational" },
  { name: "master", label: "Masters/Doctorate degree" },
  { name: "dnas", label: "Did not attend school" },
  { name: "others", label: "Others" },
];

const employmentStatus = [
  { name: "fulltime", label: "Full time" },
  { name: "parttime", label: "Part time" },
  { name: "selfemployed", label: "Self employed (i.e family business)" },
  { name: "unemployed", label: "Unemployed due to community quarantine" },
  { name: "notworking", label: "Not Working" },
];

function ParentGuardianInfo({
  label,
  education,
  employment,
  handleEducationChange,
  handleEmploymentChange,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="c1">
        <p>{`C1. ${label}'s Fullname`}</p>
        <TextField required id="standard-required" label="Lastname" />
        <TextField required id="standard-required" label="Firstname" />
        <TextField required id="standard-required" label="Middlename" />
      </div>
      <div className="c2">
        <p>{`C2. ${label}'s Highest Education Attainment`}</p>
        <FormGroup>
          {educationalAttainment.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={education.name === item.name}
                  onChange={handleChange}
                  name={item.name}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>
        <Input
          placeholder="others"
          inputProps={{ "aria-label": "description" }}
        />
      </div>

      <div className="c3">
        <p>C3. Employment Status</p>
        <FormGroup>
          {employmentStatus.map((item) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.name === employmentStatus.name}
                  onChange={handleEmploymentChange}
                  name={item.name}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>

        <div className="c4">
          <p>C4. Working from due to community quarantine</p>
          <Checkbox value="no" inputProps={{ "aria-label": "Checkbox A" }} />
          <label>YES</label>
          <Checkbox value="yes" inputProps={{ "aria-label": "Checkbox A" }} />
          <label>NO</label>
        </div>
        <div className="c5">
          <p>Contact Numbers</p>
          <TextField
            id="filled-basic"
            label="Contact Number"
            variant="filled"
          />
        </div>
      </div>
    </form>
  );
}

export default ParentGuardianInfo;
