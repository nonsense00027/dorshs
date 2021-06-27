import React, { useState, useEffect } from "react";
import "./AcademicRecord.css";
import AcademicTable from "./AcademicTable";
import { TextField, MenuItem, CircularProgress } from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function AcademicRecord({ student }) {
  const [sy, setSy] = useState("");
  const [dbSy, setDbSy] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setSy(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db.collection("schoolyears").onSnapshot((snapshot) => {
      setDbSy(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (dbSy.length > 0) {
      let active = dbSy.filter((item) => item.active === true)[0].id;
      // console.log("DB SY", dbSy);
      setSy(active);
      setLoading(false);
    }
  }, [dbSy]);

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  // console.log("DB SY", dbSy);
  // var grades = student.academicRecord.map((item) => item["GRD7"]);
  // console.log(grades);
  return (
    <div className="academicRecord">
      <div className="academicRecord__selector">
        <h4>School Year:</h4>
        <TextField
          id="standard-select-currency"
          select
          size="small"
          // label="Select Grade Level"
          variant="outlined"
          value={sy}
          onChange={handleChange}
          fullWidth
          required
          // helperText="Please select your currency"
        >
          {dbSy.map((item) => (
            <MenuItem value={item.id}>
              {item.from}-{item.to}
            </MenuItem>
          ))}
          {/* <MenuItem value={"GRD11"}>Grade 11</MenuItem> */}
          {/* <MenuItem value={"GRD12"}>Grade 12</MenuItem> */}
        </TextField>
      </div>
      <div className="academicRecord__table">
        <AcademicTable subjects={student.academicRecord} />
      </div>
    </div>
  );
}

export default AcademicRecord;
