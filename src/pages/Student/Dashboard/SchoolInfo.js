import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Dashboard.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
  textField: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
  },
},
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
      <div className="schoolInfo"> 
        <h4>
            Grade Level And School Information
        </h4>
      <div className='row'>
        <div className="col">
          <p>
            School Year
          </p>
        <TextField fullWidth disabled id="standard-disabled" defaultValue="2020-2021" variant="outlined" />
        </div>
        <div className="col">
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="No LRN" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="With LRN" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Returning (Balik-Aral)" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Grade Level to enroll
          </p>
      <TextField fullWidth disabled id="standard-disabled"  defaultValue="Grade 12" variant="outlined" />  
        </div>
        <div className="col">
          <p>
            Last Grade Level completed
          </p>
          <TextField fullWidth disabled id="standard-disabled"  defaultValue="Grade 12" variant="outlined" />
        </div>

        <div className="col">
          <p>
            Last School Year completed
          </p>
          <TextField fullWidth disabled id="standard-disabled"  defaultValue="2020-2021" variant="outlined" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Last School Attended
          </p>
         <TextField fullWidth disabled id="standard-disabled" defaultValue="UIC" variant="outlined" />
        </div>
        <div className="col">
          <p>
            School Id
          </p>
         <TextField fullWidth disabled id="standard-disabled"  defaultValue="180000002712" variant="outlined" />
        </div>
        <div className="col">
          <p>
            School Address
          </p>
        <TextField fullWidth disabled id="standard-disabled"defaultValue="Father Selga St." variant="outlined" />
        </div>
      </div>
      
    <div>
        <p>School Type</p>

    </div>
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Public" />
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Private" />
      <div className="row">
      <div className="col">
        <p>
          School to enroll in
        </p>
      <TextField fullWidth disabled id="standard-disabled"  defaultValue="UIC" variant="outlined" />
      </div>
      <div className="col">
        <p>
          School Id
        </p>
      <TextField fullWidth disabled id="standard-disabled"  defaultValue="180000002712" variant="outlined" />
      </div>
      <div className="col">
        <p>
          School Address
        </p>
      <TextField fullWidth disabled id="standard-disabled"  defaultValue="Father Selga St." variant="outlined" />
      </div>
      </div>
      <div>
          <h4>
              FOR SENIOR HIGH SCHOOL ONLY
          </h4>
          <div className="row">
            <div className="col">
              <p>
                Semester (1st/ 2nd)
              </p>
            <TextField fullWidth disabled id="standard-disabled"  defaultValue="1st" variant="outlined" />  
            </div>
            <div className="col">
              <p>
                Track
              </p>
            <TextField fullWidth disabled id="standard-disabled"  defaultValue="Technical Vocational Livelihood" variant="outlined" />
            </div>
            <div className="col">
              <p>
                Strand (if/ any)
              </p>
            <TextField fullWidth disabled id="standard-disabled"  defaultValue="ICT" variant="outlined" />
            </div>
          </div>
      </div>
      </div>
  );
}
