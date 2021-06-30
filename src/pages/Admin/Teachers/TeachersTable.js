import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const columns = [
  { id: "lastname", label: "Last name", minWidth: 150 },
  { id: "firstname", label: "First name", minWidth: 150 },
  { id: "rank", label: "Rank", minWidth: 50 },
  { id: "department", label: "Department", minWidth: 50 },
  { id: "section", label: "Section", minWidth: 50 },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#223b23",
    color: theme.palette.common.white,
    fontSize: "15px",
    fontWeight: "600",
    paddingTop: 15,
    paddingBottom: 15,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 1000,
  },
});

function TeachersTable({ teachers, dbsections, dbsubjects, ranks }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteSubject, setDeleteSubject] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editTeacher, setEditTeacher] = useState({});
  const [editTeacherCopy, setEditTeacherCopy] = useState({});
  const [checked, setChecked] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditTeacher = (data) => {
    setEditTeacher(data);
    setEditTeacherCopy(data);
    setChecked(data.subjects.map((item) => item.id));
    setEditDialogOpen(true);
  };

  console.log(checked);

  const handleEditTeacherChange = (e) => {
    setEditTeacher((prevTeacher) => ({
      ...prevTeacher,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSectionChange = (section) => {
    console.log(section);
    var sectionName = dbsections.filter(
      (dbsection) => dbsection.id === section
    )[0].name;
    console.log(sectionName);
    setSelectedSectionId(section);
    setEditTeacher((prevTeacher) => ({
      ...prevTeacher,
      section: sectionName,
      section_id: section,
    }));
    // setSection(sectionName);
  };

  const handleToggle = (value) => () => {
    if (checked.includes(value.id)) {
      var newChecked = checked.filter((item) => item !== value.id);
      setChecked(newChecked);
      var newSubjects = editTeacher.subjects.filter(
        (subject) => subject.id !== value.id
      );
      // setSubjects(newSubjects);
      setEditTeacher((prevTeacher) => ({
        ...prevTeacher,
        subjects: newSubjects,
      }));
    } else {
      setChecked((prevChecked) => [...prevChecked, value.id]);
      // setSubjects((prevSubjects) => [...prevSubjects, value]);
      var subjectsToAdd = [...editTeacher.subjects, value];
      setEditTeacher((prevTeacher) => ({
        ...prevTeacher,
        subjects: subjectsToAdd,
      }));
    }
  };

  const handleDeleteSubject = (id) => {
    if (deleteSubject.id) {
      db.collection("teachers")
        .doc(deleteSubject.id)
        .delete()
        .then((result) => {
          if (deleteSubject.section_id) {
            db.collection("sections")
              .doc(deleteSubject.section_id)
              .set({ adviser: null }, { merge: true })
              .then((result) => {
                setSnackbarOpen(true);
                setDeleteDialogOpen(false);
              });
          } else {
            setSnackbarOpen(true);
            setDeleteDialogOpen(false);
          }
        });
    }
  };

  const getSubjects = () => {
    console.log("TEACHERS NI", editTeacher);
    if (editTeacher.department) {
      // return dbsubjects.filter
      console.log("SULOD");
      if (editTeacher.department === "Junior Highschool") {
        console.log("JUNIOR");
        return dbsubjects.filter((subject) => subject.level === "JHS");
      } else {
        return dbsubjects.filter((subject) => subject.level !== "JHS");
      }
    } else {
      return [];
    }
  };

  // console.log("EDIT TEACHER", editTeacher);
  // console.log("CHECKED", checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NEW TEACHER", editTeacher);
    db.collection("teachers")
      .doc(editTeacher.id)
      .set(editTeacher)
      .then((result) => {
        setEditDialogOpen(false);
      });
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setDeleteSubject(null);
  };

  const handleDeleteDialogOpen = (subject) => {
    console.log(subject);
    setDeleteSubject(subject);
    setDeleteDialogOpen(true);
  };

  return (
    <div className="examTable">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
                <StyledTableCell key="actions" style={{ minWidth: 50 }}>
                  Actions
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell key={row.id} align="left">
                        <IconButton onClick={() => handleEditTeacher(row)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteDialogOpen(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={teachers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => handleDeleteDialogClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete ${deleteSubject ? deleteSubject.lastname : ""}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting will permanently remove the teacher from the database.
            Please confirm that you want to proceed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => handleDeleteDialogClose()}>
            Disagree
          </Button>
          <Button
            onClick={() => handleDeleteSubject()}
            color="secondary"
            variant="contained"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        className="teachers__addForm"
        maxWidth="sm"
        fullWidth
        onClose={() => setEditDialogOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={editDialogOpen}
      >
        <DialogTitle id="simple-dialog-title">
          Enter Teacher's Information
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
              id="firtname"
              name="firstname"
              label="Firstname"
              value={editTeacher?.firstname}
              onChange={handleEditTeacherChange}
              fullWidth
              required
            />
            <TextField
              id="middlename"
              name="middlename"
              label="Middlename"
              value={editTeacher?.middlename}
              onChange={handleEditTeacherChange}
              fullWidth
              required
            />
            <TextField
              id="lastname"
              label="Lastname"
              name="lastname"
              value={editTeacher?.lastname}
              onChange={handleEditTeacherChange}
              fullWidth
              required
            />
            <div>
              <TextField
                id="rank"
                name="rank"
                select
                label="Select Rank"
                value={editTeacher?.rank}
                onChange={handleEditTeacherChange}
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
                name="department"
                value={editTeacher?.department}
                onChange={handleEditTeacherChange}
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
                name="adviser"
                value={editTeacher?.adviser}
                onChange={handleEditTeacherChange}
                fullWidth
                required
              >
                <MenuItem value={"adviser"}>Adviser</MenuItem>
                <MenuItem value={"not adviser"}>Not an adviser</MenuItem>
              </TextField>
            </div>
            {editTeacher.adviser === "adviser" && (
              <div>
                <TextField
                  id="section"
                  select
                  label="Select Section"
                  name="selectedSectionId"
                  value={editTeacher?.section_id}
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
                {getSubjects().map((value) => (
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
              onClick={() => setEditDialogOpen(false)}
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
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Teacher was successfully deleted!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TeachersTable;
