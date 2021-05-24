import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <h4>
            Grade Level And School Information
        </h4>
      <div>
        <TextField disabled id="standard-disabled" label="School Year" defaultValue="2020-2021" variant="outlined" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="No LRN" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="With LRN" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Returning (Balik-Aral)" />
      </div>
      <div>
      <TextField disabled id="standard-disabled" label="Grade Level to enroll" defaultValue="Grade 12" variant="outlined" />
      <TextField disabled id="standard-disabled" label="Last Grade level completed" defaultValue="Grade 12" variant="outlined" />
      <TextField disabled id="standard-disabled" label="Last School Year completed" defaultValue="2020-2021" variant="outlined" />
      <TextField disabled id="standard-disabled" label="Last School Attended" defaultValue="UIC" variant="outlined" />
      <TextField disabled id="standard-disabled" label="School Id" defaultValue="180000002712" variant="outlined" />
      <TextField disabled id="standard-disabled" label="School Address" defaultValue="Father Selga St." variant="outlined" />
      <p>School Type</p>
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Public" />
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Private" />
      <TextField disabled id="standard-disabled" label="School to enroll in" defaultValue="UIC" variant="outlined" />
      <TextField disabled id="standard-disabled" label="School Id" defaultValue="180000002712" variant="outlined" />
      <TextField disabled id="standard-disabled" label="School Address" defaultValue="Father Selga St." variant="outlined" />
      </div>
      <div>
          <h4>
              FOR SENIOR HIGH SCHOOL ONLY
          </h4>
          <TextField disabled id="standard-disabled" label="Semester (1st/2nd)" defaultValue="1st" variant="outlined" />
          <TextField disabled id="standard-disabled" label="Track" defaultValue="Technical Vocational Livelihood" variant="outlined" />
          <TextField disabled id="standard-disabled" label="Strand (if any)" defaultValue="ICT" variant="outlined" />
      </div>
    </form>
  );
}
