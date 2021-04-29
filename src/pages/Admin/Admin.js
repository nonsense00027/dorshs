import React, { useState } from "react";
import "./Admin.css";
import Sidebar from "./Sidebar";

function Admin() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="admin">
      <Sidebar activeTab={activeTab} handleTabChange={handleTabChange} />
    </div>
  );
}

export default Admin;
