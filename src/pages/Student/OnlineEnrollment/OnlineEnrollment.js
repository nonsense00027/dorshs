import React from "react";
import "./OnlineEnrollment.css";
import onlineenrollment from "../../../img/onlineenrollment.svg";
import { Button } from "@material-ui/core";

function OnlineEnrollment() {
  return (
    <div className="onlineEnrollment">
      <div className="onlineEnrollment__header">
        <img src={onlineenrollment} alt="" />
        <div className="onlineEnrollment__headerText">
          <h1>Enrollment is now open!</h1>
          <p>Fill out the enrollment form to register</p>
        </div>
      </div>
      <Button variant="contained" disableElevation>
        Enroll now
      </Button>
    </div>
  );
}

export default OnlineEnrollment;
