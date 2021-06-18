import React, { useState } from "react";
import "./Admin.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AdminLogin from "./AdminLogin/AdminLogin";
import Dashboard from "./Dashboard/Dashboard";
import Assessments from "./Assessments/Assessments";
import Students from "./Students/Students";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";
import Sectioning from "./Sectioning/Sectioning";
import Settings from "./Settings/Settings";
import { useUserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const getComponent = (index) => {
  switch (index) {
    case 0:
      return <Dashboard />;
    case 1:
      return <Assessments />;
    case 2:
      return <Students />;
    case 3:
      return <Teachers />;
    case 4:
      return <Subjects />;
    case 5:
      return <Sectioning />;
    case 6:
      return <Settings />;
  }
};

function Admin() {
  const history = useHistory();
  const { user } = useUserContext();
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  if (user) {
    if (user.role !== "admin") {
      history.push("/");
    }
  } else {
    return <AdminLogin />;
  }

  return (
    <div className="admin">
      <Sidebar activeTab={activeTab} handleTabChange={handleTabChange} />
      <Header />
      <div className="admin__content">{getComponent(activeTab)}</div>
    </div>
  );
}

export default Admin;
