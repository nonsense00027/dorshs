import React, { useState, useEffect } from "react";
import "./Subjects.css";
import SubjectsTable from "./SubjectsTable";
import {
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MuiAlert from "@material-ui/lab/Alert";
import { collectIdsAndDocs } from "../../../shared/utilities";
import { db } from "../../../shared/configs/firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Subjects() {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectLoading, setSubjectLoading] = useState(true);

  const handleAddSubject = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("subjects")
      .add({ title: title, level: level })
      .then((result) => {
        setOpen(false);
        setTitle("");
        setLevel("");
        setSnackbarOpen(true);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("subjects")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setSubjects(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        setSubjectLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="subjects">
      <Button
        className="subjects__addButton"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add Subject
      </Button>
      <div className="subjects__tableContainer">
        <SubjectsTable subjects={subjects} />
      </div>

      <Dialog
        className="subjects__addForm"
        maxWidth="xs"
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Enter Subject Information
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleAddSubject} autoComplete="off">
            <div>
              <TextField
                id="standard-select-currency"
                select
                label="Select Grade Level"
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
                <MenuItem value={"JHS"}>Junior High</MenuItem>
                <MenuItem value={"SHS"}>Senior High</MenuItem>
              </TextField>
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Subject Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
              />
            </div>
            <div>
              <Button
                className="subjects__buttonCancel"
                fullWidth
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="subjects__buttonSubmit"
                fullWidth
                variant="contained"
                onClick={() => handleAddSubject}
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
          Subject was successfully added!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Subjects;
