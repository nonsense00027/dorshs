import React, { createContext, useContext, useState, useEffect } from "react";
import { collectIdsAndDocs } from "../shared/utilities";
import { db } from "../shared/configs/firebase";

//Prepares the data layer
export const TeacherContext = createContext();

//Wrap our app and provide the Data Layer
export const TeacherProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [schoolyears, setSchoolYears] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("students")
      .where("newEnrollee", "==", false)
      .onSnapshot((snapshot) => {
        setStudents(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("schoolyears")
      .orderBy("from", "asc")
      .onSnapshot((snapshot) => {
        setSchoolYears(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const payload = { students, schoolyears };

  return (
    <TeacherContext.Provider value={payload}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacherContext = () => useContext(TeacherContext);
