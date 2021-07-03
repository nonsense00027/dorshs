import React, { useState, useEffect } from "react";
import "./Welcome.css";
import welcomeImage from "../../img/welcome.svg";
import close from "../../img/close.svg";
import Requirements from "./Requirements";
import {
  TextField,
  MenuItem,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Navbar from "../Landing/Navbar";
import { useHistory } from "react-router-dom";
import { db } from "../../shared/configs/firebase";
import { collectIdsAndDocs } from "../../shared/utilities";

function Welcome() {
  const history = useHistory();
  const [category, setCategory] = useState(0);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db.collection("admin").onSnapshot((snapshot) => {
      setSettings(snapshot.docs.map((doc) => collectIdsAndDocs(doc))[0]);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = () => {
    switch (category) {
      case 1:
        history.push("/enrollment/grade7");
        break;
      case 2:
        history.push("/enrollment/grade7");
        break;
      case 3:
        history.push("/enrollment/grade7");
        break;
      case 4:
        history.push("/enrollment/grade7");
        break;
      default:
        console.log("ERROR");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="welcome">
      <Navbar />
      {settings.enrollment ? (
        <>
          <img src={welcomeImage} alt="" className="welcome__image" />
          <div className="welcome__header">
            <h2>Welcome!</h2>
            <p>to the</p>
            <h1>
              <span>Davao Oriental Regional Science High School</span>
              <br />
              Online Application of Admission
            </h1>
          </div>
          <div className="welcome__secondHeader">
            <h4>
              For a better application experience, please make sure you already
              have the following required documents before proceeding:
            </h4>
          </div>

          <Requirements />

          <div className="welcome__note">
            <h5>
              <span>Note:</span> The <span>PARENT</span> of the
              student/recipient is the one who <span>will fill up</span>
              the <span>Learner Enrollment</span> and <span>Survey Form</span>.
            </h5>
          </div>

          <div className="welcome__email">
            <p>
              If you have admission-related concerns, please email us at{" "}
              <span>dorshsofficial@gmail.com</span>
            </p>
          </div>

          <div className="welcome__category">
            <p>
              If you are ready, please select an application type to proceed
            </p>

            <div className="welcome__categoryOptions">
              <TextField
                id="department"
                select
                variant="outlined"
                size="small"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
                required
                placeholder="Select"
              >
                <MenuItem value={0}>Select Category</MenuItem>
                <MenuItem value={1}>Upcoming Grade 7</MenuItem>
                <MenuItem value={2}>Upcoming Grade 11</MenuItem>
                <MenuItem value={3}>Transferee</MenuItem>
                <MenuItem value={4}>Old Student</MenuItem>
              </TextField>
              <Button
                variant="contained"
                size="medium"
                fullWidth
                disabled={category === 0}
                className={
                  category === 0
                    ? "welcome__categoryButtonDisabled"
                    : "welcome__categoryButton"
                }
                onClick={() => handleSubmit()}
              >
                Proceed
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="welcome__close">
          <img src={close} alt="" />
          <h1>Erollment is close</h1>
        </div>
      )}
    </div>
  );
}

export default Welcome;
