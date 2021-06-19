import React, { useState, useEffect } from "react";
import "./Assessments.css";
import AssessmentsTable from "./AssessmentsTable";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";
import { useAdminContext } from "../../../context/AdminContext";

function Assessments() {
  const { students } = useAdminContext();

  const getNewEnrollees = () => {
    return students.filter((student) => student.newEnrollee);
  };

  return (
    <div className="assessments">
      <AssessmentsTable enrollees={getNewEnrollees()} />
    </div>
  );
}

export default Assessments;
