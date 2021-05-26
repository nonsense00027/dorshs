import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup } from '@material-ui/core';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '35ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div>
        <p>
                Father's Fullname
        </p>
        </div>
        <div>
        <TextField disabled id="outlined-disabled" label="Father's Last name" defaultValue="Miras" variant="outlined" />
        </div>
        <div>
        <TextField disabled id="outlined-disabled" label="Father's First name" defaultValue="Conrado" variant="outlined" />
        </div>
        <div>
        <TextField disabled id="outlined-disabled" label="Father's Middle name" defaultValue="Serban" variant="outlined" />
        </div>
        <div>
            <p>
            Father's Highest Education Attainment
            </p> 
            <FormGroup>
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Elementary graduate" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="High School graduate" /> 
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="College graduate" /> 
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Vocational" /> 
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Masters/ Doctorate degree" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Did not attend school" />      
            <TextField disabled id="outlined-disabled" label="others" defaultValue="others" variant="outlined" /> 
            </FormGroup>
        <div>
            <p>
                Employment Status
            </p>
            <FormGroup>
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Full time" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Part time" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Self Employed (i.e family business)" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Unemployed due to community quarantine" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Not Working" />
            </FormGroup>
        </div>
        <div>
            <p>
                Working from due to community quarantine
            </p>
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Yes" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="No" />
        </div>
        <div>
            <p>
                Contact Number
            </p>
            <TextField disabled id="outlined-disabled" label="Contact Number" defaultValue="+639483879921" variant="outlined" /> 
        </div>
        </div>
    </form>
  );
}
