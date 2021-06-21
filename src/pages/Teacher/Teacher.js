import React, { useState, useEffect } from "react";
import "./Teacher.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Students from "./Students/Students";
import Subjects from "./Subjects/Subjects";
import Record from "./Record/Record";
import Header from "./Header";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";
import { useUserContext } from "../../context/UserContext";
import { useParams, useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const getComponent = (
  index,
  students,
  handleSelectStudent,
  selectedStudent
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
        />
      );
    case 2:
      return <Subjects />;
    case 3:
      return <Record />;
  }
};

function Teacher() {
  const params = useParams();
  const history = useHistory();
  const { user } = useUserContext();
  const [activeTab, setActiveTab] = useState(0);
  const [students, setStudents] = useState([]);
  const [schoolyears, setSchoolYears] = useState([]);
  const [activeSy, setActiveSy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSy, setLoadingSy] = useState(true);
  const [selectedSy, setSelectedSy] = useState("");
  const [section, setSection] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleSelectStudent = (student) => {
    if (student.id === selectedStudent.id) {
      setSelectedStudent({});
    } else {
      setSelectedStudent(student);
    }
  };

  const getStudents = () => {
    if (students.length > 0 && activeSy) {
      let sectionStudents = students.map((student) => {
        let sectionsList = student.section.filter(
          (item) => item.id === section.id
        );
        if (sectionsList.length > 0) {
          return student;
        }
      });

      let syStudents = sectionStudents.map((student) => {
        let sy;
        if (selectedSy.length > 0) {
          sy = student.section.filter((item) => item.sy === selectedSy.id);
        } else {
          sy = student.section.filter((item) => item.sy === activeSy.id);
        }

        if (sy.length > 0) {
          return student;
        }
      });
      return syStudents;
    } else {
      return [];
    }
  };

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
    const unsubscribe = db
      .collection("students")
      .where("newEnrollee", "==", false)
      // .orderBy("firstname", "desc")
      .onSnapshot((snapshot) => {
        setStudents(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("schoolyears")
      .orderBy("from", "asc")
      .onSnapshot((snapshot) => {
        setSchoolYears(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
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
    <div>
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
          selectedStudent
        )}
      </div>
    </div>
  );
}

export default Teacher;
