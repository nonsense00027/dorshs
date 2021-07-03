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
  { id: "level", label: "Grade Level", minWidth: 40 },
  { id: "title", label: "Subject Title", minWidth: 180 },
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

function SubjectsTable({ subjects }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editSubject, setEditSubject] = useState({});
  const [deleteSubject, setDeleteSubject] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditSubject = (data) => {
    if (data.semester) {
      setEditSubject(data);
    } else {
      setEditSubject({ ...data, semester: "" });
    }
    setEditDialogOpen(true);
  };

  const handleDeleteSubject = (id) => {
    if (deleteSubject.id) {
      db.collection("subjects")
        .doc(deleteSubject.id)
        .delete()
        .then((result) => {
          setSnackbarOpen(true);
          setDeleteDialogOpen(false);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("subjects")
      .doc(editSubject.id)
      .set(editSubject)
      .then((result) => {
        setEditDialogOpen(false);
      });
  };

  const handleEditSubjectChange = (e) => {
    setEditSubject((prevSubject) => ({
      ...prevSubject,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("EDIT SUBJECT", editSubject);

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
              {subjects
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
                        <IconButton onClick={() => handleEditSubject(row)}>
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
          count={subjects.length}
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
          {`Delete ${deleteSubject ? deleteSubject.title : ""}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting this subject will permanently remove the subject from the
            database. Please confirm that you want to proceed.
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
        className="subjects__addForm"
        maxWidth="xs"
        fullWidth
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={editDialogOpen}
      >
        <DialogTitle id="simple-dialog-title">
          Enter Subject Information
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row">
              <div className="col">
                <p>Select Grade Level</p>
                <TextField
                  id="standard-select-currency"
                  name="level"
                  select
                  // label="Select Grade Level"
                  variant="outlined"
                  value={editSubject.level}
                  onChange={handleEditSubjectChange}
                  fullWidth
                  required
                  // helperText="Please select your currency"
                >
                  <MenuItem value={"JHS"}>Junior High School</MenuItem>
                  <MenuItem value={"GRD11"}>Grade 11</MenuItem>
                  <MenuItem value={"GRD12"}>Grade 12</MenuItem>
                </TextField>
              </div>
            </div>
            {(editSubject.level === "GRD11" ||
              editSubject.level === "GRD12") && (
              <div className="row">
                <div className="col">
                  <p>Select Semester</p>
                  <TextField
                    id="standard-select-currency"
                    name="semester"
                    select
                    // label="Select Grade Level"
                    variant="outlined"
                    value={editSubject.semester}
                    onChange={handleEditSubjectChange}
                    fullWidth
                    required
                    // helperText="Please select your currency"
                  >
                    <MenuItem value={"first"}>First semester</MenuItem>
                    <MenuItem value={"second"}>Second semester</MenuItem>
                  </TextField>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col">
                <p>Subject Title</p>
                <TextField
                  // margin="dense"
                  id="name"
                  name="title"
                  // label="Subject Title"
                  variant="outlined"
                  value={editSubject.title}
                  onChange={handleEditSubjectChange}
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
                onClick={() => setEditDialogOpen(false)}
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
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Subject was successfully deleted!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SubjectsTable;
