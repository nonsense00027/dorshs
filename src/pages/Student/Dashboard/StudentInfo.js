import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
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
      margin: theme.spacing(1),
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
          <p>Last Name</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Miras"
            variant="outlined"
          />
        </div>
        <div className="col">
          <p>First Name</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Jaco Raven"
            variant="outlined"
          />
        </div>

        <div className="col">
          <p>Middle Name</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Remonde"
            variant="outlined"
          />
        </div>
        <div className="col">
          <p>Extension Name</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="JR"
            variant="outlined"
          />
        </div>
      </div>

      {/* <form className={classes.container} noValidate> */}
      <div className="row">
        <div className="col">
          <p>Date of Birth</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="02/06/2000"
            variant="outlined"
          />
        </div>

        <div className="col">
          <p>Age</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
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
        <div className="row">
          <div className="col">
             <p>Mother Tounge</p>
               <TextField
                fullWidth
                disabled
                id="outlined-disabled"
                defaultValue="Cebuano"
                variant="outlined"
                />
          </div>
          <div className="col">
            <p>Religion</p>
            <TextField
              fullWidth
              disabled
              id="outlined-disabled"
              defaultValue="Roman Catholic"
              variant="outlined"
              />
            </div>
          </div>

      <div>
        <h4>Address</h4>
      </div>
      <div className="row">
        <div className='col'>
          <p>House Number and Street</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="#532-A Greenhills St."
            variant="outlined"
            />
          </div>
          <div className="col">
          <p>Subdivision/ Village/ Zone</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="DDF Village"
            variant="outlined"
            />
          </div>
          <div className="col">
          <p>Barangay</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Mandug"
            variant="outlined"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
          <p>City/ Municapality</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Davao City"
            variant="outlined"
            />
          </div>
          <div className="col">
          <p>Province</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Davao Del Sur"
            variant="outlined"
            />
          </div>
          <div className="col">
          <p>Region</p>
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            defaultValue="Region 11"
            variant="outlined"
            />
          </div>
          </div>
        </div>
  );
}
