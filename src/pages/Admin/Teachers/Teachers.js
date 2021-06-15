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
  Fab,
  Tooltip,
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

const ranks = [
  { label: "Secondary School Teacher I", value: "SST-I" },
  { label: "Secondary School Teacher II", value: "SST-II" },
  { label: "Secondary School Teacher III", value: "SST-III" },
  { label: "Master Teacher I", value: "MT-I" },
  { label: "Master Teacher II", value: "MT-II" },
  { label: "Master Teacher III", value: "MT-III" },
  { label: "Principal I", value: "P-I" },
  { label: "Principal II", value: "P-II" },
  { label: "Principal III", value: "P-III" },
];

function Teachers() {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [rank, setRank] = useState("");
  const [department, setDepartment] = useState("");
  const [adviser, setAdviser] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [dbsubjects, setDbsubjects] = useState([]);
  const [section, setSection] = useState([]);
  const [dbsections, setDbsections] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [teachersLoading, setTeachersLoading] = useState(true);
  const [selectedSectionId, setSelectedSectionId] = useState("");
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
  };

  const handleSectionChange = (section) => {
    console.log(section);
    var sectionName = dbsections.filter(
      (dbsection) => dbsection.id === section
    )[0].name;
    console.log(sectionName);
    setSelectedSectionId(section);
    setSection(sectionName);
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection("teachers")
      .add({
        firstname,
        lastname,
        middlename,
        rank,
        department,
        adviser,
        section,
        subjects,
        section_id: selectedSectionId,
      })
      .then((result) => {
        db.collection("sections")
          .doc(selectedSectionId)
          .set({ adviser: `${firstname} ${lastname}` }, { merge: true })
          .then((result) => {
            setOpen(false);
            setFirstname("");
            setLastname("");
            setMiddlename("");
            setRank("");
            setDepartment("");
            setAdviser("");
            setSection("");
            setSubjects([]);
            setChecked([]);
            setSelectedSectionId(null);
            setSnackbarOpen(true);
            setLoading(false);
          });
      });
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
    const unsubscribe = db
      .collection("sections")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setDbsections(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
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
      {/* <Button
        className="teachers__addButton"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Add Teacher
      </Button> */}
      <div className="teachers__tableContainer">
        <TeachersTable teachers={teachers} />
      </div>

      <Dialog
        className="teachers__addForm"
        maxWidth="sm"
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
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
              fullWidth
              required
            />
            <TextField
              id="lastname"
              label="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
                {ranks.map((rank) => (
                  <MenuItem value={rank.value}>{rank.label}</MenuItem>
                ))}
              </TextField>

              <TextField
                id="department"
                select
                label="Select Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                fullWidth
                required
              >
                <MenuItem value={"Junior Highschool"}>
                  Junior Highschool
                </MenuItem>
                <MenuItem value={"Senior Highschool"}>
                  Senior Highschool
                </MenuItem>
              </TextField>
            </div>
            <div>
              <TextField
                id="adviser"
                select
                label="Select Category"
                value={adviser}
                onChange={(e) => setAdviser(e.target.value)}
                fullWidth
                required
              >
                <MenuItem value={"adviser"}>Adviser</MenuItem>
                <MenuItem value={"not adviser"}>Not an adviser</MenuItem>
              </TextField>
            </div>
            {adviser === "adviser" && (
              <div>
                <TextField
                  id="section"
                  select
                  label="Select Section"
                  value={selectedSectionId}
                  onChange={(e) => handleSectionChange(e.target.value)}
                  fullWidth
                  required
                >
                  {dbsections.map((section) => (
                    <MenuItem value={section.id}>{section.name}</MenuItem>
                  ))}
                </TextField>
              </div>
            )}
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
              className="teachers__buttonCancel"
              fullWidth
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="teachers__buttonSubmit"
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
          Teacher was successfully added!
        </Alert>
      </Snackbar>

      <Tooltip title="Add Teacher" aria-label="add" arrow>
        <Fab
          color="primary"
          aria-label="add"
          className="teachers__addTeacher"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default Teachers;
