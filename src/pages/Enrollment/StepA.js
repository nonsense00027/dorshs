import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Button, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const isSHS = (level) => {
  if (level === "GRD11" || level === "GRD12") {
    return (
      <>
        <div className="section__title">
          <h4>FOR SENIOR HIGH SCHOOL ONLY</h4>
        </div>
        <div className="row">
          <div className="col">
            <p>A14. Semester(1st/2nd)</p>
            <TextField
              fullWidth
              variant="outlined"
              inputProps={{ "aria-label": "description" }}
            />
          </div>
          <div className="col">
            <p>A15. Track</p>
            <TextField
              fullWidth
              variant="outlined"
              inputProps={{ "aria-label": "description" }}
            />
          </div>
          <div className="col">
            <p>A16. Strand (if any)</p>
            <TextField
              fullWidth
              variant="outlined"
              inputProps={{ "aria-label": "description" }}
            />
          </div>
        </div>
      </>
    );
  }
};

function StepA({ handleNext, handleStepA }) {
  const classes = useStyles();

  const [sy, setSy] = useState("");
  const [lrn, setLrn] = useState(null);
  const [returning, setReturning] = useState(false);
  const [enrollLevel, setEnrollLevel] = useState("");
  const [lastSchool, setLastSchool] = useState("");
  const [lastSchoolId, setLastSchoolId] = useState("");
  const [lastGradeLevel, setLastGradeLevel] = useState("");
  const [lastSchoolAddress, setLastSchoolAddress] = useState("");
  const [lastSchoolYearCompleted, setLastSchoolYearCompleted] = useState("");
  const [lastSchoolType, setLastSchoolType] = useState("");
  const [semester, setSemester] = useState("");
  const [track, setTrack] = useState("");
  const [strand, setStrand] = useState("");

  const handleSubmit = () => {
    handleStepA({
      sy,
      lrn,
      returning,
      enrollLevel,
      lastSchool,
      lastSchoolId,
      lastGradeLevel,
      lastSchoolAddress,
      lastSchoolYearCompleted,
      lastSchoolType,
      semester,
      track,
      strand,
    });
  };

  return (
    <div className="steps">
      <h3>Grade Level Information</h3>

      <div className="row">
        <div className="col">
          <p>A1. School Year</p>
          <TextField
            fullWidth
            variant="outlined"
            value={sy}
            onChange={(e) => setSy(e.target.value)}
          />
        </div>

        <div className="col">
          <p>A2. Check the appropriate boxes only</p>
          <Checkbox
            checked={lrn === false}
            value="no lrn"
            onChange={() => setLrn(false)}
          />
          <label>No LRN</label>
          <Checkbox
            checked={lrn === true}
            value="with lrn"
            onChange={() => setLrn(true)}
          />
          <label>With LRN</label>
        </div>
        <div className="col">
          <p>A3. Returning (Balik-Aral)</p>
          <Checkbox
            checked={returning}
            value="checkedC"
            onChange={() => setReturning((prevReturning) => !prevReturning)}
          />
          <label>Returning (Balik-Aral)</label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>A4. Grade Level to enroll</p>
          <TextField
            fullWidth
            select
            variant="outlined"
            value={enrollLevel}
            onChange={(e) => setEnrollLevel(e.target.value)}
          >
            <MenuItem value={"GRD7"}>Grade 7</MenuItem>
            <MenuItem value={"GRD8"}>Grade 8</MenuItem>
            <MenuItem value={"GRD9"}>Grade 9</MenuItem>
            <MenuItem value={"GRD10"}>Grade 10</MenuItem>
            <MenuItem value={"GRD11"}>Grade 11</MenuItem>
            <MenuItem value={"GRD12"}>Grade 12</MenuItem>
          </TextField>
        </div>
        <div className="col">
          <p>A5. Last Grade Level Completed</p>
          <TextField
            fullWidth
            variant="outlined"
            value={lastGradeLevel}
            onChange={(e) => setLastGradeLevel(e.target.value)}
          />
        </div>
        <div className="col">
          <p>A6. Last school year completed</p>
          <TextField
            fullWidth
            variant="outlined"
            value={lastSchoolYearCompleted}
            onChange={(e) => setLastSchoolYearCompleted(e.target.value)}
          />
        </div>
      </div>
      <div className="section__title">
        <h4>Last School Information</h4>
      </div>
      <div className="row">
        <div className="col">
          <p>A7. Last school attended</p>
          <TextField
            fullWidth
            variant="outlined"
            value={lastSchool}
            onChange={(e) => setLastSchool(e.target.value)}
          />
        </div>
        <div className="col">
          <p>A8. Last School Id</p>
          <TextField
            fullWidth
            variant="outlined"
            // placeholder="School Id"
            value={lastSchoolId}
            onChange={(e) => setLastSchoolId(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>A9. Last School Address</p>
          <TextField
            fullWidth
            variant="outlined"
            value={lastSchoolAddress}
            onChange={(e) => setLastSchoolAddress(e.target.value)}
          />
        </div>
        <div className="col">
          <p>A10. Last School Type</p>
          <Checkbox
            checked={lastSchoolType === "public"}
            value="public"
            onChange={() => setLastSchoolType("public")}
          />
          <label>Public</label>
          <Checkbox
            checked={lastSchoolType === "private"}
            value="private"
            onChange={() => setLastSchoolType("private")}
          />
          <label>Private</label>
        </div>
      </div>
      {/* <div className="row">
        <div className="col">
        <p>A11. School to enroll in</p>
        <TextField
        fullWidth
        // placeholder="School to enroll in"
        inputProps={{ "aria-label": "description" }}
        />
        </div>
        <div className="col">
        <p>A12. School Id</p>
        <TextField
        fullWidth
        // placeholder="School Id"
        inputProps={{ "aria-label": "description" }}
        />
        </div>
        <div className="col">
        <p>A13. School Address</p>
        <TextField
        fullWidth
        // placeholder="School Address"
        inputProps={{ "aria-label": "description" }}
        />
        </div>
      </div> */}
      {isSHS(enrollLevel)}
      <div className="enrollment__buttonContainer">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="steps__nextButton"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default StepA;
