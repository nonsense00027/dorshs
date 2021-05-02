import React, { useState, useEffect } from "react";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function Assessments() {
  const [students, setStudents] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection("assessments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setStudents(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
        setStudentsLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Assessments</h1>
    </div>
  );
}

export default Assessments;
