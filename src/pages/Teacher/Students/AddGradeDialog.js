import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
// import { collectIdsAndDocs } from "../../shared/utilities";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddGradeDialog({ gradeDialogOpen, setGradeDialogOpen, student }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quarter, setQuarter] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddGrade = (e) => {
    e.preventDefault();
    setLoading(true);
    let newRecord = student.academicRecord.map((subject) => {
      if (subject.id === selectedSubject) {
        return {
          ...subject,
          [quarter]: grade,
        };
      } else {
        return subject;
      }
    });
    console.log(newRecord);
    db.collection("students")
      .doc(student.id)
      .set({ academicRecord: newRecord }, { merge: true })
      .then((result) => {
        setSelectedSubject("");
        setQuarter("");
        setLoading(false);
        setGradeDialogOpen(false);
        setSnackbarOpen(true);
      });
  };

  return (
    <>
      <Dialog
        className="subjects__addForm"
        maxWidth="xs"
        fullWidth
        onClose={() => setGradeDialogOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={gradeDialogOpen}
      >
        <DialogTitle id="simple-dialog-title">
          Enter Subject Information
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleAddGrade} autoComplete="off">
            <div className="row">
              <div className="col">
                <p>Select Subject</p>
                <TextField
                  id="standard-select-currency"
                  select
                  variant="outlined"
                  size="small"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  fullWidth
                  required
                >
                  <MenuItem value="">Select subject</MenuItem>

                  {student?.academicRecord.map((subject) => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.title}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Select Quarter</p>
                <TextField
                  id="standard-select-currency"
                  select
                  variant="outlined"
                  size="small"
                  value={quarter}
                  onChange={(e) => setQuarter(e.target.value)}
                  fullWidth
                  required
                >
                  <MenuItem value="">Select quarter</MenuItem>
                  <MenuItem value="q1">Quarter 1</MenuItem>
                  <MenuItem value="q2">Quarter 2</MenuItem>
                  <MenuItem value="q3">Quarter 3</MenuItem>
                  <MenuItem value="q4">Quarter 4</MenuItem>
                </TextField>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Grade</p>
                <TextField
                  id="name"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  fullWidth
                  required
                />
              </div>
            </div>
            <div>
              <Button
                className="subjects__buttonCancel"
                fullWidth
                variant="contained"
                onClick={() => setGradeDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="subjects__buttonSubmit"
                fullWidth
                variant="contained"
                onClick={() => handleAddGrade}
                color="primary"
              >
                {loading && <CircularProgress color="inherit" size={20} />}
                Proceed
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Grade was successfully added!
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddGradeDialog;
