import React, { useState } from "react";
import "./Sectioning.css";
import SectioningTable from "./SectioningTable";
import {
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  CircularProgress,
  Fab,
  Tooltip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MuiAlert from "@material-ui/lab/Alert";
import { db } from "../../../shared/configs/firebase";
import { useAdminContext } from "../../../context/AdminContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Sectioning() {
  const { sections } = useAdminContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const handleAddSection = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("sections")
      .add({ name: name, level: level, adviser: null })
      .then((result) => {
        setOpen(false);
        setName("");
        setLevel("");
        setSnackbarOpen(true);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  // if (sectionLoading) {
  //   return (
  //     <div
  //       style={{
  //         height: "100%",
  //         width: "100%",
  //         display: "grid",
  //         placeItems: "center",
  //       }}
  //     >
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  return (
    <div className="subjects">
      {/* <Button
        className="subjects__addButton"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add Subject
      </Button> */}
      <div className="subjects__tableContainer">
        <SectioningTable sections={sections} />
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
          <form onSubmit={handleAddSection} autoComplete="off">
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
            <div className="row">
              <div className="col">
                <p>Section name</p>
                <TextField
                  // margin="dense"
                  id="name"
                  // label="Subject Title"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="subjects__buttonSubmit"
                fullWidth
                variant="contained"
                onClick={() => handleAddSection}
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
          Section was successfully added!
        </Alert>
      </Snackbar>

      <Tooltip title="Add Subject" aria-label="add" arrow>
        <Fab
          color="primary"
          aria-label="add"
          className="subjects__addSubject"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default Sectioning;
