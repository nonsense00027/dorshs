import React, { useState } from "react";
import "./Admin.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AdminLogin from "./AdminLogin/AdminLogin";
import Assessments from "./Assessments/Assessments";
import Students from "./Students/Students";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";
import Settings from "./Settings/Settings";
import { useUserContext } from "../../context/UserContext";

const getComponent = (index) => {
  switch (index) {
    case 0:
      return <Assessments />;
    case 1:
      return <Students />;
    case 2:
      return <Teachers />;
    case 3:
      return <Subjects />;
    case 4:
      return <Settings />;
  }
};

function Admin() {
  const { user } = useUserContext();
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  if (!user) {
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
