import React, { useState, useEffect } from "react";
import "./Student.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Information from "./Information/Information";
import Requirements from "./Requirements/Requirements";
import AcademicRecord from "./AcademicRecord/AcademicRecord";
import { useParams, useHistory } from "react-router-dom";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";
import {
  CircularProgress,
  Fab,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import EnrollDialog from "./EnrollDialog";
import { useUserContext } from "../../context/UserContext";

const getComponent = (index, student) => {
  switch (index) {
    case 0:
      return <Dashboard student={student} />;
    case 1:
      return <Information student={student} />;
    case 2:
      return <Requirements student={student} />;
    case 3:
      return <AcademicRecord student={student} />;
    // case 3:
    //   return <Subjects />;
    // case 4:
    //   return <Settings />;
  }
};
function Student() {
  const params = useParams();
  const history = useHistory();
  const { user } = useUserContext();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [requirementDialog, setRequirementDialog] = useState(false);

  useEffect(() => {
    console.log("GETTING USER", user);
    if (user) {
      if (params.lrn) {
        db.collection("students")
          .where("lrnNo", "==", params.lrn)
          .onSnapshot((snapshot) => {
            if (snapshot.docs.length > 0) {
              const foundUser = snapshot.docs.map((doc) =>
                collectIdsAndDocs(doc)
              )[0];
              console.log("STUDENTT", foundUser);
              if (foundUser?.newEnrollee) {
                setRequirementDialog(true);
              }
              setStudent(foundUser);
              setLoading(false);
            } else {
              console.log("USER NOT FOUND");
              history.push("/");
            }
          });
      }
    } else {
      // history.push("/");
    }
  }, []);

  // useEffect(() => {
  //   console.log("GAWAS");
  //   if (student?.newEnrollee) {
  //     setRequirementDialog(true);
  //   }
  // }, [student?.newEnrollee]);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="student">
      <Sidebar
        studentStatus={student.newEnrollee}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <div className="student__content">{getComponent(activeTab, student)}</div>

      {/* <Information /> */}

      <Dialog
        open={requirementDialog}
        onClose={() => setRequirementDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Complete the requirements"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="student__dialogContentText"
          >
            <p>
              Please upload all of the necessary requirements listed on the
              <strong> Requirements Tab </strong>that can be found on the
              Sidebar.
            </p>
            <span>
              <strong>Note: </strong>Failure to complete the requirements could
              lead to your account be considered as a spam and will be deleted.
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={() => setRequirementDialog(false)} color="primary">
            I understand
          </Button>
        </DialogActions>
      </Dialog>

      {user.role === "admin" && (
        <>
          <EnrollDialog
            enrollDialogOpen={enrollDialogOpen}
            setEnrollDialogOpen={setEnrollDialogOpen}
            student={student}
          />
          <Tooltip
            title="Enroll Student"
            aria-label="add"
            arrow
            placement="top"
          >
            <Fab
              color="primary"
              aria-label="add"
              className="student__enrollButton"
              onClick={() => setEnrollDialogOpen(true)}
            >
              <CheckIcon />
            </Fab>
          </Tooltip>
          <Tooltip
            title="Remove Student"
            aria-label="add"
            arrow
            placement="bottom"
          >
            <Fab
              // color="primary"
              aria-label="add"
              className="student__removeButton"
              // onClick={() => setOpen(true)}
            >
              <CloseIcon />
            </Fab>
          </Tooltip>
        </>
      )}
    </div>
  );
}

export default Student;
