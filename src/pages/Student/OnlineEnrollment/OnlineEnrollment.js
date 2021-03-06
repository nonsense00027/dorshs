import React, { useState, useEffect } from "react";
import "./OnlineEnrollment.css";
import onlineenrollment from "../../../img/onlineenrollment.svg";
import close from "../../../img/close.svg";
import { Button, CircularProgress } from "@material-ui/core";
import { db } from "../../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../../shared/utilities";

function OnlineEnrollment({ student }) {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  const handleEnrollSecondsem = () => {
    db.collection("students")
      .doc(student.id)
      .set({ enrolling: true }, { merge: true });
  };

  useEffect(() => {
    const unsubscribe = db.collection("admin").onSnapshot((snapshot) => {
      setSettings(snapshot.docs.map((doc) => collectIdsAndDocs(doc))[0]);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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

  return (
    <div className="onlineEnrollment">
      {settings.enrollment && !student.enrolling ? (
        <>
          <div className="onlineEnrollment__header">
            <img src={onlineenrollment} alt="" />
            <div className="onlineEnrollment__headerText">
              <h1>Enrollment is now open!</h1>
              <p>Fill out the enrollment form to register</p>
            </div>
          </div>
          <Button className="enrollButton" variant="contained" disableElevation>
            Enroll now
          </Button>
          <Button
            className="second-sem"
            variant="contained"
            disableElevation
            onClick={() => handleEnrollSecondsem()}
          >
            Second semester
          </Button>
        </>
      ) : (
        <div>
          <div className="onlineEnrollment__header">
            <img src={close} alt="" />
            <div className="onlineEnrollment__headerText">
              <h1>Enrollment is close</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OnlineEnrollment;
