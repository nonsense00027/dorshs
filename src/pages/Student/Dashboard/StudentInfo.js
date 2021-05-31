import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2.5),
      width: "35ch",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    "& .MuiTextField-root": {
      width: "60ch",
      margin: theme.spacing(3),
    },
  },
  address: {  
      "& .MuiTextField-root": {
        width: "160ch",
        margin: theme.spacing(1),
      },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="studentInfo">
      <div className="row">
        <div className="col">
          <p>PSA Birth Certificate No</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="1884541365"
            variant="outlined"
          />
        </div>
        <div className="col">
          <p>Learner Reference Number (LRN)</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="1884541365"
            variant="outlined"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Last Name"
            defaultValue="Miras"
            variant="outlined"
          />
        </div>
        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="First Name"
            defaultValue="Jaco Raven"
            variant="outlined"
          />
        </div>

        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Middle Name"
            defaultValue="Remonde"
            variant="outlined"
          />
        </div>
        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Extension Name"
            defaultValue="JR"
            variant="outlined"
          />
        </div>
      </div>

      {/* <form className={classes.container} noValidate> */}
      <div className="row">
        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Date of Birth"
            defaultValue="02/06/2000"
            variant="outlined"
          />
        </div>

        <div className="col">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Age"
            defaultValue="20"
            variant="outlined"
          />
        </div>

        <div className="col">
          <p>Sex</p>
          <FormControlLabel
            disabled
            control={<Checkbox checked name="checkedE" />}
            label="Male"
          />
          <FormControlLabel
            disabled
            control={<Checkbox checked name="checkedE" />}
            label="Female"
          />
        </div>
      </div>
      <div>
        <p>Belonging to Indigenous People (IP)</p>
        <FormControlLabel
          disabled
          control={<Checkbox checked name="checkedE" />}
          label="Yes"
        />
        <FormControlLabel
          disabled
          control={<Checkbox checked name="checkedE" />}
          label="No"
        />
      </div>
      {/* </form> */}
      <div className={classes.textField}>
        <TextField
          fullWidth
          disabled
          id="outlined-disabled"
          label="Mother Tounge"
          defaultValue="Cebuano"
          variant="outlined"
        />
        <TextField
          fullWidth
          disabled
          id="outlined-disabled"
          label="Religion"
          defaultValue="Roman Catholic"
          variant="outlined"
        />
      </div>

      <div className={classes.address}> 
        <h4>Address</h4>
        <div>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="House Number and Street"
            defaultValue="#532-A Greenhills St."
            variant="outlined"
          />
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Subdivision/ Village/ Zone"
            defaultValue="DDF Village"
            variant="outlined"
          />
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Barangay"
            defaultValue="Mandug"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="City/ Municipality"
            defaultValue="Davao City"
            variant="outlined"
          />
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Province"
            defaultValue="Davao Del Sur"
            variant="outlined"
          />
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Region"
            defaultValue="Region"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}
