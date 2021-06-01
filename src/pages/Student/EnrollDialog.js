import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";
import { SubjectTwoTone } from "@material-ui/icons";

function EnrollDialog({ enrollDialogOpen, setEnrollDialogOpen, student }) {
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleEnrollStudent = (e) => {
    e.preventDefault();
    console.log(subjects);
    console.log(level);
    var subjectsToLoad = subjects.filter((item) => item.level === level);
    console.log("SUBJECTS TO LOAD", subjectsToLoad);
    console.log(student.id);
    var academicRecord = student.academicRecord || [];
    var newAcademicRecord = [...academicRecord, { [level]: subjectsToLoad }];
    // console.log("ACADS", newAcademicRecord);
    // newAcademicRecord.forEach((item) => console.log(item[level]));
    db.collection("students")
      .doc(student.id)
      .set(
        {
          newEnrollee: false,
          academicRecord: newAcademicRecord,
        },
        { merge: true }
      )
      .then((result) => {
        setLoading(false);
        setEnrollDialogOpen(false);
      });
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("subjects")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setSubjects(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Dialog
      className="subjects__addForm"
      maxWidth="xs"
      fullWidth
      onClose={() => setEnrollDialogOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={enrollDialogOpen}
    >
      <DialogTitle id="simple-dialog-title">Enroll Student</DialogTitle>

      <DialogContent>
        <form onSubmit={handleEnrollStudent} autoComplete="off">
          <div className="row">
            <div className="col">
              <p>Select Grade Level</p>
              <TextField
                id="standard-select-currency"
                select
                // label="Select Grade Level"
                variant="outlined"
                value={level}
                onChange={handleChange}
                fullWidth
                required
                // helperText="Please select your currency"
              >
                <MenuItem value={"GRD7"}>Grade 7</MenuItem>
                <MenuItem value={"GRD8"}>Grade 8</MenuItem>
                <MenuItem value={"GRD9"}>Grade 9</MenuItem>
                <MenuItem value={"GRD10"}>Grade 10</MenuItem>
                <MenuItem value={"GRD11"}>Grade 11</MenuItem>
                <MenuItem value={"GRD12"}>Grade 12</MenuItem>
              </TextField>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="subjects__buttonSubmit"
              fullWidth
              variant="contained"
              //   onClick={() => handleAddSubject}
              color="primary"
            >
              {loading && <CircularProgress color="inherit" size={20} />}
              Proceed
            </Button>
            <Button
              className="subjects__buttonCancel"
              fullWidth
              variant="contained"
              onClick={() => setEnrollDialogOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EnrollDialog;
