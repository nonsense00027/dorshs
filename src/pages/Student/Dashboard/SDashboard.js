import React, { useState, useEffect } from "react";
// import "../Student.css";
import { Avatar } from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";
import { CircularProgress } from "@material-ui/core";

function SDashboard({ student }) {
  const [schoolYears, setSchoolYears] = useState([]);
  const [loading, settLoading] = useState(true);

  const getSection = () => {
    if (schoolYears.length > 0) {
      let activeSy = schoolYears.filter((item) => item.active === true)[0].id;
      let activeSection = student.section.filter(
        (item) => item.sy === activeSy
      )[0].name;
      return activeSection;
    }
  };
  useEffect(() => {
    const unsubscribe = db.collection("schoolyears").onSnapshot((snapshot) => {
      setSchoolYears(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      settLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(getSection());

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
  // console.log(getSection());
  console.log(schoolYears);
  return (
    <div className="sDashboard">
      <div className="dashboard__header">
        <div className="dashboard__headerLeft">
          <Avatar src={student.idPicture} alt={student.lastname} />
          <div className="dashboard__headerLeftInfo">
            <h2>{`${student.firstname} ${student.lastname}`}</h2>
            <h3>
              {student.currentLevel} - {getSection()}
            </h3>
            <p>LRN: {student.lrnNo}</p>
          </div>
        </div>
        <div className="dashboard__headerRight">
          <p>Academic Standing: GOOD</p>
          <p>General Average for the Current Semester: N/A</p>
          <p>S.Y. 2020-2021</p>
        </div>
      </div>
      {/* <div className="enrolledSub">
        <h4>Current Enrolled Subject</h4>
      </div>

      <div className="card">
        <div className="row2">
          <div className="col2">
            <h5>First Semester</h5>
          </div>
          <div className="col2">
            <h5>Second Semester</h5>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>CORE SUBJECTS</p>
          </div>
          <div className="col3">
            <p>CORE SUBJECTS</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>Contemporary Philippine Arts From the Region</p>
          </div>
          <div className="col3">
            <p>21st Century Literature from the Philippines and the World</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>Understanding Culture, Society and Politics</p>
          </div>
          <div className="col3">
            <p>Media and Information Literacy</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>Physical Education & Health III</p>
          </div>
          <div className="col3">
            <p>Physical Education & Health IV</p>
          </div>
        </div>
        <div className="row3">
          <div className="col4">
            <p>APPLIED SUBJECTS</p>
          </div>
          <div className="col4">
            <p>APPLIED SUBJECTS</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>Practical Research II</p>
          </div>
          <div className="col3">
            <p>Inquires, Investigation, & Immersion</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>English for Academic & Professional Purposes</p>
          </div>
          <div className="col3">
            <p>Entrepreneurship</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>Pagsulat Sa Filipino sa Piling Larangan</p>
          </div>
        </div>

        <div className="row3">
          <div className="col4">
            <p>SPECIALIZED SUBJECTS</p>
          </div>
          <div className="col4">
            <p>SPECIALIZED SUBJECTS</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>General Physics I</p>
          </div>
          <div className="col3">
            <p>General Physics II</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>General Biology I</p>
          </div>
          <div className="col3">
            <p>General Biology II</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p>General Chemistry I</p>
          </div>
          <div className="col3">
            <p>General Chemistry II</p>
          </div>
        </div>

        <div className="row3">
          <div className="col3">
            <p></p>
          </div>
          <div className="col3">
            <p>Research/ Capstone Project</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SDashboard;
