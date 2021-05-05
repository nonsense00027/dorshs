import React from "react";
import '../Enrollment/Enrollment.css';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';


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
      parents: false,
      elder: false,
      grandparents: false,
      extend: false,
      others: false,
      none: false,
      able: false,
      cable: false,
      noncable: false,
      basic: false,
      smart: false,
      tablet: false,
      radio: false,
      desktop: false,
      laptop: false,
      none2: false,
      others2: false,
      mobiledata: false,
      broad: false,
      compshop: false,
      places: false,
      none3: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    //D3.
    const { parents, elder, grandparents, extend, others, none, able } = state;
    //D4
    const { cable, noncable, basic, smart, tablet, radio, desktop, laptop, none2, others2 } = state;
    //D6 
    const { mobiledata, broad, compshop, places, none3 } = state;
  return (
    <div className="stepD">
      <div className='d1'>
        <p>
        D1. How Does your child go to school? Choose all that applies
        </p>
        <Checkbox value="1" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Walking</label>
          <Checkbox value="2" inputProps={{ 'aria-label': 'Checkbox B' }} />
          <label>Public commute (land/water)</label>
          <Checkbox value="3" inputProps={{ 'aria-label': 'Checkbox C' }} />
          <label>family-owned vehicle </label>
          <Checkbox value="4" inputProps={{ 'aria-label': 'Checkbox D' }} />
          <label>School service</label>
      </div>
      <div className="d2">
        <p>
        D2. How many of your household members (including the enrollee) are studying in School Year 2020-2021? Please specify each.
        </p>
          <div>
        <form>
        <TextField required id="outlined-basic" label="Kinder" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 1" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 2" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 3" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 4" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 5" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 6" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 7" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 8" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 9" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 10" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 11" variant="outlined" />
        <TextField required id="outlined-basic" label="Grade 12" variant="outlined" />
        <TextField required id="outlined-basic" label="Others: (i.e college, vocational. etc)" variant="outlined" />
        </form>
          </div>
        <form className={classes.root} noValidate autoComplete="off">
          <p>
          D3. Who among the household members can provide instructional support to the child’s distance learning? Choose all that applies.
          </p>
          <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={parents} onChange={handleChange} name="parents" />}
            label="parents/ guardian"
          />
          <FormControlLabel
            control={<Checkbox checked={elder} onChange={handleChange} name="elder" />}
            label="elder siblings"
          />
          <FormControlLabel
            control={<Checkbox checked={grandparents} onChange={handleChange} name="grandparents" />}
            label="grandparents"
          />
          <FormControlLabel
            control={<Checkbox checked={extend} onChange={handleChange} name="extend" />}
            label="extended members of the family"
          />
          <FormControlLabel
            control={<Checkbox checked={others} onChange={handleChange} name="others" />}
            label="others (tutor, house helper"
          />
          <FormControlLabel
            control={<Checkbox checked={none} onChange={handleChange} name="none" />}
            label="none"
          />
          <FormControlLabel
            control={<Checkbox checked={able} onChange={handleChange} name="able" />}
            label="able to do independent learning"
          />
          </FormGroup>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <p>
            D4. What devices are available at home that the learner can use for learning? Check all that applies.
          </p>
          <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={cable} onChange={handleChange} name="cable" />}
            label="cable TV"
          />
          <FormControlLabel
            control={<Checkbox checked={noncable} onChange={handleChange} name="noncable" />}
            label="non-cable TV"
          />
          <FormControlLabel
            control={<Checkbox checked={basic} onChange={handleChange} name="basic" />}
            label="basic cellphone"
          />
          <FormControlLabel
            control={<Checkbox checked={smart} onChange={handleChange} name="smart" />}
            label="smartphone"
          />
          <FormControlLabel
            control={<Checkbox checked={tablet} onChange={handleChange} name="tablet" />}
            label="tablet"
          />
          <FormControlLabel
            control={<Checkbox checked={radio} onChange={handleChange} name="radio" />}
            label="radio"
          />
          <FormControlLabel
            control={<Checkbox checked={desktop} onChange={handleChange} name="desktop" />}
            label="desktop computer"
          />
          <FormControlLabel
            control={<Checkbox checked={laptop} onChange={handleChange} name="laptop" />}
            label="laptop"
          />
          <FormControlLabel
            control={<Checkbox checked={none2} onChange={handleChange} name="none2" />}
            label="none"
          />
          <FormControlLabel
            control={<Checkbox checked={others2} onChange={handleChange} name="others2" />}
            label="others: "
          />
          <Input placeholder='others' inputProps={{ 'aria-label': 'description' }} />
          </FormGroup>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <p>
          D5. Do you have a way to connect to the internet? 
          </p>
          <Checkbox value="Yes" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Yes</label>
          <Checkbox value="No" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>No (if NO, proceed to D7)</label>
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <p>
          D6. How do you connect to the internet? Choose all that applies.
          </p>
          <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={mobiledata} onChange={handleChange} name="mobiledata" />}
            label="own mobile data"
          />
          <FormControlLabel
            control={<Checkbox checked={broad} onChange={handleChange} name="broad" />}
            label="own broadband internet (DSL, wireless fiber, satellite)"
          />
          <FormControlLabel
            control={<Checkbox checked={compshop} onChange={handleChange} name="compshop" />}
            label="computer shop"
          />
          <FormControlLabel
            control={<Checkbox checked={places} onChange={handleChange} name="places" />}
            label="other places outside the home with internet connection (library, barangay/ municipal hall, neighbor, relatives)"
          />
          <FormControlLabel
            control={<Checkbox checked={none3} onChange={handleChange} name="none3" />}
            label="none"
          />
          </FormGroup>
        </form>
      </div>
    </div>
  );
}


