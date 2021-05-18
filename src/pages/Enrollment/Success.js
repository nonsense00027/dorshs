import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Success({idCode}) {
  return (
    <div className="success">
      <CheckCircleIcon />
      <p>
        Enrollment form has been submitted successfully. This is your{" "}
        <strong> tracking ID </strong>
      </p>
      <div className="success__code">
        <h3>{idCode}</h3>
      </div>
      <h4>
        Please save or copy this code to any desired software, as this will be
        used to login and track your enrollment status.
      </h4>
      <h4>
        Continue to dashboard and upload your other requirements{" "}
        <span>
          {" "}
          <a href="/">here</a>{" "}
        </span>
      </h4>
    </div>
  );
}

export default Success;
