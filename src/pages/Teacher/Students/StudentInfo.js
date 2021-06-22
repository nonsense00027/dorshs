import React, { useState, useEffect } from "react";
import { Avatar, TextField, CircularProgress, Button } from "@material-ui/core";
import AcademicTable from "./AcademicTable";
import AddIcon from "@material-ui/icons/Add";
import AddGradeDialog from "./AddGradeDialog";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function StudentInfo({ selectedStudent, dbStudent, studentLoading }) {
  const [gradeDialogOpen, setGradeDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    db.collection("students")
      .doc(selectedStudent.id)
      .onSnapshot((doc) => {
        setStudent({ id: doc.id, ...doc.data() });
        setLoading(false);
      });
  }, []);

  console.log("STUDENNT", student);
  if (studentLoading || loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          paddingRight: 300,
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      <div className="teacher__studentsContent">
        <div className="image__container">
          <Avatar alt="Remy Sharp" src="nonsense" />
        </div>
        <div className="info__container">
          <div className="row">
            <div className="col">
              <p>LRN No.</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={student.lrnNo}
                // onChange={(e) => setSy(e.target.value)}
              />
            </div>

            <div className="col">
              <p>Lastname</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={selectedStudent ? selectedStudent.lastname : ""}

                // onChange={(e) => setSy(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Firstname</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={selectedStudent ? selectedStudent.firstname : ""}
                // onChange={(e) => setSy(e.target.value)}
              />
            </div>

            <div className="col">
              <p>Middlename</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={selectedStudent ? selectedStudent.middlename : ""}

                // onChange={(e) => setSy(e.target.value)}
              />
            </div>
          </div>
          <div className="info__grades">
            <div className="info__gradesHeader">
              <h3>Student Academic Record</h3>
              <Button
                variant="contained"
                className="info__gradesButton"
                onClick={() => setGradeDialogOpen(true)}
              >
                <AddIcon /> Add Grade
              </Button>
            </div>
            <AcademicTable subjects={student.academicRecord} />
          </div>
        </div>
        <AddGradeDialog
          gradeDialogOpen={gradeDialogOpen}
          setGradeDialogOpen={setGradeDialogOpen}
          student={student}
        />
      </div>
    </>
  );
}

export default StudentInfo;
