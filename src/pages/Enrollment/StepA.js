import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function StepA() {
  const classes = useStyles();

  // const [sy, setSy] = useState("");
  // const [lrn, setLrn] = useState(false);
  // const [returning, setReturning] = useState(false);
  // const [enrollLevel, setEnrollLevel] = useState("");
  // const [lastSchool, setLastSchool] = useState("");
  // const [schoolId, setSchoolId] = useState("");
  // const [lastGradeLevel, setLastGradeLevel] = useState("");
  // const [lastSchoolAddress, setLastSchoolAddress] = useState("");
  // const [lastSchoolYearCompleted, setLastSchoolYearCompleted] = useState("");
  // const [lastSchoolType, setLastSchoolType] = useState("");
  // const [semester, setSemester] = useState("");
  // const [track, setTrack] = useState("");
  // const [strand, setStrand] = useState("");

  return (
    <div>
      <p>
        A1. School Year
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="School Year" />
    </form>
    <div>
      <p>
        A2. Check the appropriate boxes only
      </p>
      <Checkbox value="checkedA" inputProps={{ 'aria-label': 'No LRN' }}/>
      <label>No LRN</label>
      <Checkbox value="checkedB" inputProps={{ 'aria-label': 'With LRN' }}/>
      <label>With LRN</label>
      <Checkbox value="checkedC" inputProps={{ 'aria-label': 'Returning (Balik-Aral)' }}/>
      <label>A3. Returning (Balik-Aral)</label>
    </div>
    <div>
      <p>
        A4. Grade Level to enroll
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Grade Level to enroll' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A5. Last Grade Level Completed
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Last Grade Level Completed' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A6. Last school year completed
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Last school year completed' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A7. Last school attended
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Last school attended' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A8. School Id
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder='School Id' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A9. School Address
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='School Address' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A10. School Type
      </p>
      <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Public' }}/>
      <label>Public</label>
      <Checkbox value="checkedB" inputProps={{ 'aria-label': 'Private' }}/>
      <label>Private</label>
    </div>
    <div>
      <p>
        A11. School to enroll in
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='School to enroll in' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A12. School Id
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='School Id' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A13. School Address
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='School Address' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <h4>
        FOR SENIOR HIGH SCHOOL ONLY
      </h4>
    </div>
    <div>
      <p>
        A14. Semester(1st/2nd)
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Semester(1st/2nd)' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A15. Track
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Track' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    <div>
      <p>
        A16. Strand (if any)
      </p>
      <form  className={classes.root} noValidate autoComplete="off">
      <Input placeholder='Strand (if any)' inputProps={{ 'aria-label': 'description' }} />
    </form>
    </div>
    </div>
  );
}

export default StepA;
