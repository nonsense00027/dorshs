import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import '../Enrollment/Enrollment.css';
import { FormControlLabel, FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    elementary: false,
    highschool: false,
    college: false,
    vocational: false,
    master: false,
    dnas: false,
    others: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { elementary, highschool, college, vocational, master, dnas, others } = state;
  const { fulltime, parttime, selfemployed, unemployed, notworking } = state;
  const error = [elementary, highschool, college, vocational, master, dnas, others].filter((v) => v).length !== 2; 
  const error1 = [ fulltime, parttime, selfemployed, unemployed, notworking ].filter((v)=> v).length !==2 ; 

// export default function FormPropsTextFields() {
//   const classes = useStyles();

  return (
    <div className="father">

    <form className={classes.root} noValidate autoComplete="off">
      <div className="c1">
        <p>
        C1. Father's Fullname 
        </p>
        <TextField required id="standard-required" label="Lastname"/>
        <TextField required id="standard-required" label="Firstname"/>
        <TextField required id="standard-required" label="Middlename"/>
      </div>
      <div className="c2">
        <p>
          C2. Father's Highest Education Attainment
        </p>
        <FormGroup>
        <FormControlLabel
            control={<Checkbox checked={elementary} onChange={handleChange} name="elementary" />}
            label="Elementary Graduate"
          />
           <FormControlLabel
            control={<Checkbox checked={highschool} onChange={handleChange} name="highschool" />}
            label="Highschool Graduate"
          />
           <FormControlLabel
            control={<Checkbox checked={college} onChange={handleChange} name="college" />}
            label="College Graduate"
          />
           <FormControlLabel
            control={<Checkbox checked={vocational} onChange={handleChange} name="vocational" />}
            label="Vocational"
          />
            <FormControlLabel
            control={<Checkbox checked={master} onChange={handleChange} name="master" />}
            label="Master's Degree"
          />
          <FormControlLabel
            control={<Checkbox checked={dnas} onChange={handleChange} name="dnas" />}
            label="Did not attend school"
          />
          <FormControlLabel
            control={<Checkbox checked={others} onChange={handleChange} name="others" />}
            label="Others:"
          />
        </FormGroup>
        <Input placeholder='others' inputProps={{ 'aria-label': 'description' }} />
      </div>
      <div className="c3">
        <p>
          C3. Employment Status
        </p>
        <FormGroup>
        <FormControlLabel
            control={<Checkbox checked={fulltime} onChange={handleChange} name="fulltime" />}
            label="Full time"
          />
           <FormControlLabel
            control={<Checkbox checked={parttime} onChange={handleChange} name="parttime" />}
            label="Part time"
          />
           <FormControlLabel
            control={<Checkbox checked={selfemployed} onChange={handleChange} name="selfemployed" />}
            label="Self employed (i.e family business)"
          />
           <FormControlLabel
            control={<Checkbox checked={unemployed} onChange={handleChange} name="unemployed" />}
            label="Unemployed due to community quarantine"
          />
            <FormControlLabel
            control={<Checkbox checked={notworking} onChange={handleChange} name="notworking" />}
            label="Not Working"
          />
        </FormGroup>
        <div className="c4">
          <p>
            C4. Working from due to community quarantine
          </p>
          <Checkbox value="no" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>YES</label>
          <Checkbox value="yes" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>NO</label>
        </div>
        <div className="c5">
          <p>
            Contact Numbers
          </p>
          <TextField id="filled-basic" label="Contact Number" variant="filled" />
        </div>
      </div>
    </form>
    </div>
  );
}
