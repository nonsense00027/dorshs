import React, { useState, useEffect } from "react";
import AssessmentsTable from "./AssessmentsTable";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function Assessments() {
  const [newEnrollees, setNewEnrollees] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  console.log("NEW ENROLLEES", newEnrollees);
  useEffect(() => {
    const unsubscribe = db
      .collection("students")
      .where("newEnrollee", "==", true)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setNewEnrollees(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        setStudentsLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Assessments</h1>
      <AssessmentsTable enrollees={newEnrollees} />
    </div>
  );
}

export default Assessments;
