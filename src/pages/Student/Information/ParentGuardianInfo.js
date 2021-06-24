import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FormGroup } from "@material-ui/core";
import Input from "@material-ui/core/Input";

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
  education,
  employment,
  number,
  workingQuarantine,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p>{label}'s Last Name</p>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue={lastname}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <p>{label}'s First Name</p>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue={firstname}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <p>{label}'s Middle Name</p>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue={middlename}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <p>Highest Education Attainment</p>
        <FormGroup>
          {educationalAttainment.map((item) => (
            <FormControlLabel
              disabled
              control={
                <Checkbox
                  checked={education.name === item.name}
                  name={item.name}
                />
              }
              label={item.value}
            />
          ))}
          <div>
            <p>others</p>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue="others"
              variant="outlined"
            />
          </div>
        </FormGroup>
        <div>
          <p>Employment Status</p>
          <FormGroup>
            {employmentStatus.map((item) => (
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={employment.name === item.name}
                    name="checkedE"
                  />
                }
                label={item.value}
              />
            ))}
          </FormGroup>
        </div>
        <div>
          <p>Working from due to community quarantine</p>
          <FormControlLabel
            disabled
            control={
              <Checkbox checked={workingQuarantine === "yes"} name="checkedE" />
            }
            label="Yes"
          />
          <FormControlLabel
            disabled
            control={
              <Checkbox checked={workingQuarantine === "no"} name="checkedE" />
            }
            label="No"
          />
        </div>
        <div>
          <p>Contact Number</p>
          <TextField
            disabled
            id="outlined-disabled"
            defaultValue={number}
            variant="outlined"
          />
        </div>
      </div>
    </form>
  );
}

export default ParentGuardianInfo;
