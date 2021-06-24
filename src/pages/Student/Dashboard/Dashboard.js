import React from "react";
import "./Dashboard.css";
import SDashboard from "./SDashboard";
import EnrolledSubject from "./EnrolledSubject";
import blank from "../../../img/blank.svg";

function Dashboard({ student }) {
  return (
    <div className="dashboard">
      <SDashboard student={student} />
      {student.newEnrollee ? (
        <div className="dashboard__empty">
          <img className="dashboard__blank" src={blank} alt="" />
          <h2>Not yet enrolled</h2>
        </div>
      ) : (
        <EnrolledSubject />
      )}
    </div>
  );
}

export default Dashboard;
