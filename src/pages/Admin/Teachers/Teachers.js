import React, { useState, useEffect } from "react";
import "./Teachers.css";
import TeachersTable from "./TeachersTable";
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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Teachers() {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [rank, setRank] = useState("");
  const [committee, setCommittee] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [dbsubjects, setDbsubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [teachersLoading, setTeachersLoading] = useState(true);

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    if (checked.includes(value.id)) {
      var newChecked = checked.filter((item) => item !== value.id);
      setChecked(newChecked);
      var newSubjects = subjects.filter((subject) => subject.id !== value.id);
      setSubjects(newSubjects);
    } else {
      setChecked((prevChecked) => [...prevChecked, value.id]);
      setSubjects((prevSubjects) => [...prevSubjects, value]);
    }
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];

    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }

    // setChecked(newChecked);
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("teachers")
      .add({ firstname, lastname, middlename, rank, committee, subjects })
      .then((result) => {
        setOpen(false);
        setFirstname("");
        setLastname("");
        setMiddlename("");
        setRank("");
        setSubjects([]);
        setSnackbarOpen(true);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("teachers")
      .orderBy("lastname", "desc")
      .onSnapshot((snapshot) => {
        setTeachers(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        setTeachersLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("subjects")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setDbsubjects(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("subjects", subjects);
  }, [subjects]);

  return (
    <div className="teachers">
      <Button
        className="teachers__addButton"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add Teacher
      </Button>
      <div className="teachers__tableContainer">
        {/* <TeachersTable teachers={teachers} /> */}
      </div>

      <Dialog
        className="teachers__addForm"
        maxWidth="xs"
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Enter Teacher's Information
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleAddTeacher} autoComplete="off">
            <TextField
              id="firtname"
              label="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              fullWidth
              required
            />
            <TextField
              id="middlename"
              label="Middlename"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              fullWidth
              required
            />
            <TextField
              id="lastname"
              label="Lastname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              fullWidth
              required
            />
            <div>
              <TextField
                id="rank"
                select
                label="Select Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                fullWidth
                required
              >
                <MenuItem value={"GRD7"}>Teacher I</MenuItem>
                <MenuItem value={"GRD8"}>Teacher II</MenuItem>
                <MenuItem value={"GRD9"}>Teacher III</MenuItem>
              </TextField>

              <TextField
                id="committee"
                select
                label="Select Committee"
                value={committee}
                onChange={(e) => setCommittee(e.target.value)}
                fullWidth
                required
              >
                <MenuItem value={"GRD7"}>Committee I</MenuItem>
                <MenuItem value={"GRD8"}>Committee II</MenuItem>
                <MenuItem value={"GRD9"}>Committee III</MenuItem>
              </TextField>
            </div>
            <p>Select subjects:</p>
            <div className="teachers__subjectsList">
              <List className={classes.root}>
                {dbsubjects.map((value) => (
                  <ListItem
                    key={value.id}
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.includes(value.id)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": value.id }}
                      />
                    </ListItemIcon>
                    <ListItemText id={value.id} primary={value.title} />
                  </ListItem>
                ))}
              </List>
            </div>
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
              color="primary"
            >
              {loading && <CircularProgress color="inherit" size={20} />}
              Proceed
            </Button>
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

export default Teachers;
