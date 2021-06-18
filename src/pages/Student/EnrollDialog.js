import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";

function EnrollDialog({ enrollDialogOpen, setEnrollDialogOpen, student }) {
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [section, setSection] = useState("");
  const [selectedSectionId, setSelectedSectionId] = useState("");
  const [dbsections, setDbsections] = useState([]);

  const handleChange = (event) => {
    setLevel(event.target.value);
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

  const handleEnrollStudent = (e) => {
    e.preventDefault();
    var subjectsToLoad = subjects.filter((item) => item.level === level);
    db.collection("students")
      .doc(student.id)
      .set(
        {
          newEnrollee: false,
          academicRecord: subjectsToLoad,
          currentLevel: level,
          section: section,
          section_id: selectedSectionId,
        },
        { merge: true }
      )
      .then((result) => {
        setLoading(false);
        setEnrollDialogOpen(false);
      });
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("subjects")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setSubjects(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
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

  const getSections = () => {
    if (level.length > 0) {
      return dbsections.filter((section) => section.level === level);
    } else {
      return [];
    }
  };

  return (
    <Dialog
      className="subjects__addForm"
      maxWidth="xs"
      fullWidth
      onClose={() => setEnrollDialogOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={enrollDialogOpen}
    >
      <DialogTitle id="simple-dialog-title">Enroll Student</DialogTitle>

      <DialogContent>
        <form onSubmit={handleEnrollStudent} autoComplete="off">
          <div className="row">
            <div className="col">
              <p>Select Grade Level</p>
              <TextField
                id="standard-select-currency"
                select
                variant="outlined"
                value={level}
                onChange={handleChange}
                fullWidth
                required
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
              <p>Select Section</p>
              <TextField
                id="section"
                select
                variant="outlined"
                value={selectedSectionId}
                onChange={(e) => handleSectionChange(e.target.value)}
                fullWidth
                required
              >
                {getSections().map((section) => (
                  <MenuItem key={section.id} value={section.id}>
                    {section.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="subjects__buttonSubmit"
              fullWidth
              variant="contained"
              //   onClick={() => handleAddSubject}
              color="primary"
            >
              {loading && <CircularProgress color="inherit" size={20} />}
              Proceed
            </Button>
            <Button
              className="subjects__buttonCancel"
              fullWidth
              variant="contained"
              onClick={() => setEnrollDialogOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EnrollDialog;
