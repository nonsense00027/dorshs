import React from "react";
import "./Dashboard.css";
import admindashboard from "../../../img/admindashboard.png";
import news from "../../../img/news.png";
import data from "../../../img/data.svg";
import { useAdminContext } from "../../../context/AdminContext";

function Dashboard() {
  const { students, teachers } = useAdminContext();

  const getApplicantsLength = () => {
    return students.filter((student) => student.newEnrollee === true).length;
  };
  const getStudentsLength = () => {
    return students.filter((student) => student.newEnrollee === false).length;
  };

  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <div className="row">
          <div className="dashboard__card applicantsCard">
            <img src={data} alt="" />
            <div className="dashboard__info">
              <h1>{getApplicantsLength()}</h1>
              <p>applicants</p>
            </div>
          </div>
          <div className="dashboard__card studentsyearCard">
            <img src={data} alt="" />
            <div className="dashboard__info">
              <h1>{getStudentsLength()}</h1>
              <p>accepted admission</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="dashboard__card studentsCard">
            <img src={data} alt="" />
            <div className="dashboard__info">
              <h1>{getStudentsLength()}</h1>
              <p>total number of students</p>
            </div>
          </div>
          <div className="dashboard__card teachersCard">
            <img src={data} alt="" />
            <div className="dashboard__info">
              <h1>{teachers.length}</h1>
              <p>teachers</p>
            </div>
          </div>
        </div>
        <div className="dashboard__news">
          <img src={news} alt="" />
          <div className="dashboard__newsInfo">
            <h1>
              <span>NEWS</span> feature
              <br />
              is coming soon.
            </h1>
          </div>
        </div>
      </div>
      <div className="dashboard__right">
        <img src={admindashboard} alt="" />
        <h2>Announcement feature is coming soon.</h2>
      </div>
    </div>
  );
}

export default Dashboard;
