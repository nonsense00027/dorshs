import React, { useState, useEffect } from "react";
import "./Teacher.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Students from "./Students/Students";
import Subjects from "./Subjects/Subjects";
import Record from "./Record/Record";
import Settings from "./Settings/Settings";
import Header from "./Header";
import { db } from "../../shared/configs/firebase";
import { useUserContext } from "../../context/UserContext";
import { useParams, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useTeacherContext } from "../../context/TeacherContext";

const getComponent = (
  index,
  students,
  handleSelectStudent,
  selectedStudent,
  studentLoading
) => {
  switch (index) {
    case 0:
      return <Dashboard />;
    case 1:
      return (
        <Students
          students={students}
          handleSelectStudent={handleSelectStudent}
          selectedStudent={selectedStudent}
          studentLoading={studentLoading}
        />
      );
    case 2:
      return <Subjects />;
    case 3:
      return <Record />;
    case 4:
      return <Settings />;
  }
};

function Teacher() {
  const params = useParams();
  const history = useHistory();
  const { user } = useUserContext();
  const { students, schoolyears } = useTeacherContext();
  const [activeTab, setActiveTab] = useState(0);
  const [activeSy, setActiveSy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSy, setLoadingSy] = useState(true);
  const [selectedSy, setSelectedSy] = useState("");
  const [section, setSection] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentLoading, setStudentLoading] = useState(false);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleSelectStudent = (student) => {
    setStudentLoading(true);
    if (selectedStudent) {
      if (student.id === selectedStudent.id) {
        setSelectedStudent(null);
      } else {
        setSelectedStudent(student);
      }
    } else {
      setSelectedStudent(student);
    }
    setTimeout(function () {
      setStudentLoading(false);
    }, 700);
  };

  const getStudents = () => {
    if (students.length > 0 && activeSy !== null) {
      let sectionStudents = students
        .map((student) => {
          let sectionsList = student.section.filter(
            (item) => item.id === section.id
          );
          if (sectionsList.length > 0) {
            return student;
          }
        })
        .filter((item) => item !== undefined);

      let syStudents = sectionStudents
        .map((student) => {
          let sy;
          if (selectedSy.length > 0) {
            sy = student.section.filter((item) => item.sy === selectedSy.id);
          } else {
            sy = student.section.filter((item) => item.sy === activeSy.id);
          }

          if (sy.length > 0) {
            return student;
          }
        })
        .filter((item) => item !== undefined);
      return syStudents;
    } else {
      return [];
    }
  };

  // console.log("GETTING STUDENTS", getStudents());

  useEffect(() => {
    if (user) {
      if (params.id) {
        db.collection("sections")
          .doc(params.id)
          .get()
          .then((result) => {
            setSection({ ...result.data(), id: result.id });
            setLoading(false);
          });
      }
    } else {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    if (schoolyears.length > 0) {
      let active = schoolyears.filter((sy) => sy.active === true)[0];
      setActiveSy(active);
      setLoadingSy(false);
    }
  }, [schoolyears]);

  if (loading || loadingSy) {
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
    <div className="teacher">
      <Sidebar activeTab={activeTab} handleTabChange={handleTabChange} />
      <Header
        schoolyears={schoolyears}
        selectedSy={selectedSy}
        activeSy={activeSy}
      />
      <div className="teacher__content">
        {getComponent(
          activeTab,
          getStudents(),
          handleSelectStudent,
          selectedStudent,
          studentLoading
        )}
      </div>
    </div>
  );
}

export default Teacher;
