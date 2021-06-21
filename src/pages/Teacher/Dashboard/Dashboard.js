import React from "react";
import "./Dashboard.css";
import soon from "../../../img/soon.png";

function Dashboard() {
  return (
    <div className="teacherDashboard">
      <img src={soon} alt="" />
      <h2>Announcement Feature is Coming Soon</h2>
      <p>Communicating with your class will never be this easy. Stay tuned!</p>
    </div>
  );
}

export default Dashboard;
