import React, { useState } from "react";
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

function EnrollDialog({ enrollDialogOpen, setEnrollDialogOpen, student }) {
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  const handleEnrollStudent = (e) => {
    e.preventDefault();
    console.log(student.id);
    db.collection("students")
      .doc(student.id)
      .set(
        {
          newEnrollee: false,
        },
        { merge: true }
      )
      .then((result) => {
        setLoading(false);
        setEnrollDialogOpen(false);
      });
  };
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
