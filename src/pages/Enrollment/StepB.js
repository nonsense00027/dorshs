import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      width: '55ch',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '60ch',
    },
  },
}));

function StepB({ handleNext }) {
  const classes = useStyles();
  

  // const [birthCertificateNo, setBirthCertificateNo] = useState("");
  // const [lrnNo, setLrnNo] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [middlename, setMiddlename] = useState("");
  // const [extensionname, setExtensionname] = useState("");
  // const [birthdate, setBirthdate] = useState("");
  // const [age, setAge] = useState("");
  // const [sex, setSex] = useState("");
  // const [ip, setIp] = useState(false);
  // const [ipType, setIpType] = useState("");
  // const [motherTongue, setMotherTongue] = useState("");
  // const [religion, setReligion] = useState("");
  // const [specialNeeds, setSpecialNeeds] = useState(false);
  // const [specialNeedsType, setSpecialNeedsType] = useState("");
  // const [device, setDevice] = useState(false);
  // const [deviceType, setDeviceType] = useState("");
  // const [houseNumber, setHouseNumber] = useState("");
  // const [subdivision, setSubdivision] = useState("");
  // const [barangay, setBarangay] = useState("");
  // const [city, setCity] = useState("");
  // const [province, setProvince] = useState("");
  // const [region, setRegion] = useState("");

  
  


  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B1, PSA Birth Certificate No. (if available upon enrollment)
      </p>
      <TextField id="filled-basic" label="PSA Birth Certificate" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B2. Learner Reference Number (LRN)
      </p>
      <TextField id="filled-basic" label="LRN" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B3. Last Name
      </p>
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B4. First Name
      </p>
      <TextField id="filled-basic" label="First Name" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B5. Middle Name
      </p>
      <TextField id="filled-basic" label="Middle Name" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B6. Extension Name e.g. Jr, III (if applicable)
      </p>
      <Input placeholder='Extension Name' inputProps={{ 'aria-label': 'description' }} />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B7. Date of Birth (Month/Day/Year)
      </p>
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>

        <div>
          <p>
           B8. Age
          </p>
          <Input placeholder='Age' inputProps={{ 'aria-label': 'description' }} />
        </div>
        <div>
          <p>
           B9. Sex
          </p>
          <Checkbox value="1" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Male</label>
          <Checkbox value="2" inputProps={{ 'aria-label': 'Checkbox B' }} />
          <label>Female</label>
        </div>

        <div>
          <p>
           B10. Belonging to Indienous People (IP)
          </p>
          <Checkbox value="1" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Yes</label>
          <Checkbox value="2" inputProps={{ 'aria-label': 'Checkbox B' }} />
          <label>No</label>
        </div>
        
        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B11. If yes, please specify:
          </p>
          <Input placeholder='Please Specify' inputProps={{ 'aria-label': 'description' }} />
        </div>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B12. Mother Tounge
      </p>
      <TextField id="filled-basic" label="Mother Tounge" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <p>
        B13. Religion
      </p>
      <TextField id="filled-basic" label="Religion" variant="filled" />
      </form>

        <div>
          <h4>
            For Learnes with Special Education Needs
          </h4>
        </div>

      <div>
          <p>
           B14. Does the learner have special education needs?
          (i.e. physical, mental, developmental disability, medical condition, giftedness, among others)
          </p>
          <Checkbox value="1" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Yes</label>
          <Checkbox value="2" inputProps={{ 'aria-label': 'Checkbox B' }} />
          <label>No</label>
        </div>

        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B15. If yes, please specify:
          </p>
          <Input placeholder='Please Specify' inputProps={{ 'aria-label': 'description' }} />
        </div>

        <div>
          <p>
         B16. Do you have any assistive technology devices available at home? 
          (i.e. screen reader, Braille, DAISY)    
          </p>
          <Checkbox value="1" inputProps={{ 'aria-label': 'Checkbox A' }} />
          <label>Yes</label>
          <Checkbox value="2" inputProps={{ 'aria-label': 'Checkbox B' }} />
          <label>No</label>
        </div>

        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B17. If yes, please specify:
          </p>
          <Input placeholder='Please Specify' inputProps={{ 'aria-label': 'description' }} />
        </div>

        <div>
          <h4>Address</h4>
        </div>

        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B18. House Number and Street
          </p>
          <TextField id="filled-basic" label="House Number and Street" variant="filled" />
        </div>

        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B19. Subdivision/ Village/ Zone
          </p>
          <TextField id="filled-basic" label="Subdivision/ Village/ Zone" variant="filled" />
        </div>
        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B20. Barangay
          </p>
          <TextField id="filled-basic" label="Barangay" variant="filled" />
        </div>

        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B21. City/ Municipality
          </p>
          <TextField id="filled-basic" label="Municipality" variant="filled" />
        </div>
        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B22. Province
          </p>
          <TextField id="filled-basic" label="Province" variant="filled" />
        </div>
        <div className={classes.root} noValidate autoComplete="off">
          <p>
           B23. Region
          </p>
          <TextField id="filled-basic" label="Region" variant="filled" />
        </div>

      <div className="enrollment__buttonContainer">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default StepB;
