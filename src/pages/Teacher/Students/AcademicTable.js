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
import LaunchIcon from "@material-ui/icons/Launch";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const columns = [
  { id: "title", label: "Learning Areas", minWidth: 160 },
  { id: "q1", label: "Quarter 1", minWidth: 50, align: "center" },
  { id: "q2", label: "Quarter 2", minWidth: 50, align: "center" },
  { id: "q3", label: "Quarter 3", minWidth: 50, align: "center" },
  { id: "q4", label: "Quarter 4", minWidth: 50, align: "center" },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#223b23",
    color: theme.palette.common.white,
    fontSize: "14px",
    fontWeight: "600",
    paddingTop: 15,
    paddingBottom: 15,
  },
  body: {
    fontSize: 12,
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

function AcademicTable({ subjects }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                {/* <StyledTableCell key="actions" style={{ minWidth: 50 }}>
                  Actions
                </StyledTableCell> */}
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
                      {/* <TableCell key={row.id} align="left">
                        <IconButton>
                          <LaunchIcon
                            onClick={() =>
                              window.open(
                                `/student/${row.lrnNo}`,
                                "_blank"
                              )
                            }
                          />
                        </IconButton>
                      </TableCell> */}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default AcademicTable;
