import React, { useState } from "react";
import "./Student.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";

const getComponent = (index) => {
  switch (index) {
    case 0:
      return <Dashboard />;
    // case 1:
    //   return <Students />;
    // case 2:
    //   return <Teachers />;
    // case 3:
    //   return <Subjects />;
    // case 4:
    //   return <Settings />;
  }
};
function Student() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="student">
      <Sidebar activeTab={activeTab} handleTabChange={handleTabChange} />
      <div className="student__content">{getComponent(activeTab)}</div>

      {/* <Dashboard /> */}
    </div>
  );
}

export default Student;
