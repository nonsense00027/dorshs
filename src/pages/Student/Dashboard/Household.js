import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Dashboard.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  export default function Household() {
    const classes = useStyles();
  
    return (
        <div className='houseHold'>
        <p>
        How does your child go to school? Choose all that applies
        </p>
        <div className="row">
          <div className="col">
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Walking" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Public commute (land/water)" />          
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Family-owned vehicle" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="School Service" />
      </div>
        </div>
        <div>
            <p>
                How many of your household members (including the enrolle) are studying in School Year 2020-2021?
            </p>
        </div>
        <div className="row">
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Kinder" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 1" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 2" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 3" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 4" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 5" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 6" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 7" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 8" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 9" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 10" defaultValue="0" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 11" defaultValue="1" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Grade 12" defaultValue="1" variant="outlined" />
        </div>
        <div className="col">
        <TextField fullWidth disabled id="standard-disabled" label="Others" 
        defaultValue="0" variant="outlined" />
        </div>
        </div>
        
        <div>
            <p>
            Who among the household members can provide instructional support to the child’s distance learning? 
            </p>
        </div>
        <div className="row">
          <div className="col">
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="parents/ guardian" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="elder siblings" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="grandparents" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="extended members of the family" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="others (tutor, house helper)" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="none" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="able to do independent learning" />
          </div>
        </div>   
        <div>
            <p>
            What devices are available at home that the learner can use for learning?  
            </p>
        </div>
        <div className="row">
          <div className="col">
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="non-cable TV" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="basic cellphone" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="smartphone" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="cable TV" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="tablet" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="radio" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="desktop computer" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="laptop" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="none" />
          <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="others" />
          <TextField fullWidth disabled id="standard-disabled" label="others" defaultValue="" variant="outlined" />
          </div>
        </div>
      </div>
    )
}


