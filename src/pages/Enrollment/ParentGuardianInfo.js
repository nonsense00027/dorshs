import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import "../Enrollment/Enrollment.css";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { PhoneRounded } from "@material-ui/icons";

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
  { name: "elementary", value: "Elementary graduate" },
  { name: "highschool", value: "High School graduate" },
  { name: "college", value: "College graduate" },
  { name: "vocational", value: "Vocational" },
  { name: "master", value: "Masters/Doctorate degree" },
  { name: "dnas", value: "Did not attend school" },
  { name: "others", value: "Others" },
];

const employmentStatus = [
  { name: "fulltime", value: "Full time" },
  { name: "parttime", value: "Part time" },
  { name: "selfemployed", value: "Self employed (i.e family business)" },
  { name: "unemployed", value: "Unemployed due to community quarantine" },
  { name: "notworking", value: "Not Working" },
];

function ParentGuardianInfo({
  label,
  lastname,
  firstname,
  middlename,
  setLastname,
  setFirstname,
  setMiddlename,
  education,
  employment,
  workingQuarantine,
  handleEducationChange,
  handleEmploymentChange,
  handleWorkingChange,
  phoneNumber,
  setNumber,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="c1">
        <p>{`C1. ${label}'s Fullname`}</p>
        <TextField
          required
          variant="outlined"
          label="Last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label="First name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label="Middle name"
          value={middlename}
          onChange={(e) => setMiddlename(e.target.value)}
        />
      </div>

      <div className="c2">
        <p>{`C2. ${label}'s Highest Education Attainment`}</p>
        <FormGroup>
          {educationalAttainment.map((item) => (
            <FormControlLabel
              key={item.name}
              control={
                <Checkbox
                  checked={education.name === item.name}
                  onChange={handleEducationChange}
                  name={item.name}
                  value={item.value}
                />
              }
              label={item.value}
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
              key={item.name}
              control={
                <Checkbox
                  checked={item.name === employment.name}
                  onChange={handleEmploymentChange}
                  name={item.name}
                  value={item.value}
                />
              }
              label={item.value}
            />
          ))}
        </FormGroup>

        <div className="c4">
          <p>C4. Working from due to community quarantine</p>
          <Checkbox
            checked={workingQuarantine === "no"}
            onChange={handleWorkingChange}
            value="no"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <label>YES</label>
          <Checkbox
            checked={workingQuarantine === "yes"}
            onChange={handleWorkingChange}
            value="yes"
            inputProps={{ "aria-label": "Checkbox A" }}
          />
          <label>NO</label>
        </div>
        <div className="row">
          <div className="col">
            <p>C5. Contact Number</p>
            <TextField
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ParentGuardianInfo;
