import React, { createContext, useContext, useState, useEffect } from "react";
import { collectIdsAndDocs } from "../shared/utilities";
import { db } from "../shared/configs/firebase";

//Prepares the data layer
export const AdminContext = createContext();

//Wrap our app and provide the Data Layer
export const AdminProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [dbsubjects, setDbsubjects] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("students")
      .orderBy("lastname", "desc")
      .onSnapshot((snapshot) => {
        setStudents(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("teachers")
      .orderBy("lastname", "desc")
      .onSnapshot((snapshot) => {
        setTeachers(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("subjects")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setDbsubjects(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("sections")
      .orderBy("level", "asc")
      .onSnapshot((snapshot) => {
        setSections(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const payload = { students, teachers, dbsubjects, sections };

  return (
    <AdminContext.Provider value={payload}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
