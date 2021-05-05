import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import "../Enrollment/Enrollment.css";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import { borders } from "@material-ui/system";
// import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
  title: {
    textAlign: "center",
  },
}));

export default function StepC() {
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

  const {
    elementary,
    highschool,
    college,
    vocational,
    master,
    dnas,
    others,
  } = state;
  const { fulltime, parttime, selfemployed, unemployed, notworking } = state;
  const error =
    [elementary, highschool, college, vocational, master, dnas, others].filter(
      (v) => v
    ).length !== 2;
  const error1 =
    [fulltime, parttime, selfemployed, unemployed, notworking].filter((v) => v)
      .length !== 2;

  // export default function FormPropsTextFields() {
  //   const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box py={4} px={4}>
        <Grid container>
          {/* father */}
          <Grid item xs={12} sm={6} md={4}>
            <Box borderRight={1} borderTop={1} borderLeft={1} pt={2}>
              <div className="father">
                <h3 className={classes.title}>Father</h3>
                <form className={classes.root} noValidate autoComplete="off">
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c1">
                      <p>
                        C1. Father's Fullname (last name, first name, middle
                        name)
                      </p>
                      <TextField
                        required
                        id="standard-required"
                        label="Lastname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Firstname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Middlename"
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c2">
                      <p>C2. Father's Highest Education Attainment</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={elementary}
                              onChange={handleChange}
                              name="elementary"
                            />
                          }
                          label="Elementary Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={highschool}
                              onChange={handleChange}
                              name="highschool"
                            />
                          }
                          label="Highschool Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={college}
                              onChange={handleChange}
                              name="college"
                            />
                          }
                          label="College Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={vocational}
                              onChange={handleChange}
                              name="vocational"
                            />
                          }
                          label="Vocational"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={master}
                              onChange={handleChange}
                              name="master"
                            />
                          }
                          label="Master's Degree"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={dnas}
                              onChange={handleChange}
                              name="dnas"
                            />
                          }
                          label="Did not attend school"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={others}
                              onChange={handleChange}
                              name="others"
                            />
                          }
                          label="Others:"
                        />
                      </FormGroup>
                      <Input
                        placeholder="others"
                        inputProps={{ "aria-label": "description" }}
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c3">
                      <p>C3. Employment Status</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={fulltime}
                              onChange={handleChange}
                              name="fulltime"
                            />
                          }
                          label="Full time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={parttime}
                              onChange={handleChange}
                              name="parttime"
                            />
                          }
                          label="Part time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selfemployed}
                              onChange={handleChange}
                              name="selfemployed"
                            />
                          }
                          label="Self employed (i.e family business)"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={unemployed}
                              onChange={handleChange}
                              name="unemployed"
                            />
                          }
                          label="Unemployed due to community quarantine"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={notworking}
                              onChange={handleChange}
                              name="notworking"
                            />
                          }
                          label="Not Working"
                        />
                      </FormGroup>
                    </div>
                    <div className="c4">
                      <p>C4. Working from due to community quarantine</p>
                      <Checkbox
                        value="no"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>YES</label>
                      <Checkbox
                        value="yes"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>NO</label>
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c5">
                      <p>Contact number/s (cellphone/ telephone)</p>
                      <TextField
                        id="filled-basic"
                        label="Contact Number"
                        variant="filled"
                      />
                    </div>
                  </Box>
                </form>
              </div>
            </Box>
          </Grid>

          {/* mother */}
          <Grid item xs={12} sm={6} md={4}>
            <Box borderRight={1} borderTop={1} pt={2}>
              <div className="mother">
                <h3 className={classes.title}>Mother</h3>
                <form className={classes.root} noValidate autoComplete="off">
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c1">
                      <p>
                        C1. Father's Fullname (last name, first name, middle
                        name)
                      </p>
                      <TextField
                        required
                        id="standard-required"
                        label="Lastname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Firstname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Middlename"
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c2">
                      <p>C2. Father's Highest Education Attainment</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={elementary}
                              onChange={handleChange}
                              name="elementary"
                            />
                          }
                          label="Elementary Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={highschool}
                              onChange={handleChange}
                              name="highschool"
                            />
                          }
                          label="Highschool Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={college}
                              onChange={handleChange}
                              name="college"
                            />
                          }
                          label="College Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={vocational}
                              onChange={handleChange}
                              name="vocational"
                            />
                          }
                          label="Vocational"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={master}
                              onChange={handleChange}
                              name="master"
                            />
                          }
                          label="Master's Degree"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={dnas}
                              onChange={handleChange}
                              name="dnas"
                            />
                          }
                          label="Did not attend school"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={others}
                              onChange={handleChange}
                              name="others"
                            />
                          }
                          label="Others:"
                        />
                      </FormGroup>
                      <Input
                        placeholder="others"
                        inputProps={{ "aria-label": "description" }}
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c3">
                      <p>C3. Employment Status</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={fulltime}
                              onChange={handleChange}
                              name="fulltime"
                            />
                          }
                          label="Full time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={parttime}
                              onChange={handleChange}
                              name="parttime"
                            />
                          }
                          label="Part time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selfemployed}
                              onChange={handleChange}
                              name="selfemployed"
                            />
                          }
                          label="Self employed (i.e family business)"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={unemployed}
                              onChange={handleChange}
                              name="unemployed"
                            />
                          }
                          label="Unemployed due to community quarantine"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={notworking}
                              onChange={handleChange}
                              name="notworking"
                            />
                          }
                          label="Not Working"
                        />
                      </FormGroup>
                    </div>
                    <div className="c4">
                      <p>C4. Working from due to community quarantine</p>
                      <Checkbox
                        value="no"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>YES</label>
                      <Checkbox
                        value="yes"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>NO</label>
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c5">
                      <p>Contact number/s (cellphone/ telephone)</p>
                      <TextField
                        id="filled-basic"
                        label="Contact Number"
                        variant="filled"
                      />
                    </div>
                  </Box>
                </form>
              </div>
            </Box>
          </Grid>

          {/* guardian */}
          <Grid item xs={12} md={4}>
            <Box borderRight={1} borderTop={1} pt={2}>
              <div className="guardian">
                <h3 className={classes.title}>Guardian</h3>
                <form className={classes.root} noValidate autoComplete="off">
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c1">
                      <p>
                        C1. Father's Fullname (last name, first name, middle
                        name)
                      </p>
                      <TextField
                        required
                        id="standard-required"
                        label="Lastname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Firstname"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Middlename"
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c2">
                      <p>C2. Father's Highest Education Attainment</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={elementary}
                              onChange={handleChange}
                              name="elementary"
                            />
                          }
                          label="Elementary Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={highschool}
                              onChange={handleChange}
                              name="highschool"
                            />
                          }
                          label="Highschool Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={college}
                              onChange={handleChange}
                              name="college"
                            />
                          }
                          label="College Graduate"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={vocational}
                              onChange={handleChange}
                              name="vocational"
                            />
                          }
                          label="Vocational"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={master}
                              onChange={handleChange}
                              name="master"
                            />
                          }
                          label="Master's Degree"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={dnas}
                              onChange={handleChange}
                              name="dnas"
                            />
                          }
                          label="Did not attend school"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={others}
                              onChange={handleChange}
                              name="others"
                            />
                          }
                          label="Others:"
                        />
                      </FormGroup>
                      <Input
                        placeholder="others"
                        inputProps={{ "aria-label": "description" }}
                      />
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c3">
                      <p>C3. Employment Status</p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={fulltime}
                              onChange={handleChange}
                              name="fulltime"
                            />
                          }
                          label="Full time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={parttime}
                              onChange={handleChange}
                              name="parttime"
                            />
                          }
                          label="Part time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selfemployed}
                              onChange={handleChange}
                              name="selfemployed"
                            />
                          }
                          label="Self employed (i.e family business)"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={unemployed}
                              onChange={handleChange}
                              name="unemployed"
                            />
                          }
                          label="Unemployed due to community quarantine"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={notworking}
                              onChange={handleChange}
                              name="notworking"
                            />
                          }
                          label="Not Working"
                        />
                      </FormGroup>
                    </div>
                    <div className="c4">
                      <p>C4. Working from due to community quarantine</p>
                      <Checkbox
                        value="no"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>YES</label>
                      <Checkbox
                        value="yes"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                      <label>NO</label>
                    </div>
                  </Box>
                  <Box borderBottom={1} pb={5} px={1}>
                    <div className="c5">
                      <p>Contact number/s (cellphone/ telephone)</p>
                      <TextField
                        id="filled-basic"
                        label="Contact Number"
                        variant="filled"
                      />
                    </div>
                  </Box>
                </form>
              </div>
            </Box>
          </Grid>
          {/* C16. Is your family a beneficiary of 4Ps?  */}
          <Grid item xs={12}>
            <Box
              borderBottom={1}
              borderRight={1}
              borderLeft={1}
              pb={5}
              py={2}
              px={2}
            >
              <div className="c16">
                <Box display="flex" flexDirection="row" alignItems="center">
                  <p>C16. Is your family a beneficiary of 4Ps?</p>
                  <Checkbox
                    value="no"
                    inputProps={{ "aria-label": "Checkbox A" }}
                  />
                  <label>YES</label>
                  <Checkbox
                    value="yes"
                    inputProps={{ "aria-label": "Checkbox A" }}
                  />
                  <label>NO</label>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
