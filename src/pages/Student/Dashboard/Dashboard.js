import React from "react";
import "./Dashboard.css";
import SDashboard from "./SDashboard";
import EnrolledSubject from "./EnrolledSubject";
import blank from "../../../img/blank.svg";
import admindashboard from "../../../img/admindashboard.png";
function Dashboard({ student }) {
  return (
    <div className="dashboard__student">
      <div className="dashboard__studentLeft">
        <SDashboard student={student} />
        {student.newEnrollee ? (
          <div className="dashboard__empty">
            <img className="dashboard__blank" src={blank} alt="" />
            <h2>Not yet enrolled</h2>
          </div>
        ) : (
          <EnrolledSubject subjects={student.academicRecord} />
        )}
      </div>
      <div className="dashboard__studentRight">
        <img src={admindashboard} alt="" />
        <h2>Announcement feature is coming soon.</h2>
      </div>
    </div>
  );
}

export default Dashboard;
