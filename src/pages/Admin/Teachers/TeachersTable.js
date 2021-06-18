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
    width: "90%",
  },
  container: {
    maxHeight: 1000,
  },
});

function TeachersTable({ teachers }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteSubject, setDeleteSubject] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                        <IconButton>
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
