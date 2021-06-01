import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHistory } from "react-router-dom";
import { db } from "../../shared/configs/firebase";
import { useUserContext } from "../../context/UserContext";

function Success({ idCode }) {
  const history = useHistory();
  const { userLogin } = useUserContext();
  const handleRedirect = () => {
    console.log(idCode);
    db.collection("students")
      .doc(idCode.id)
      .get()
      .then((result) => {
        userLogin(result.data());
        history.push(`/student/${idCode.lrn}`);
      });
    // userLogin(student);
  };
  return (
    <div className="success">
      <CheckCircleIcon />
      <p>Enrollment form has been submitted successfully.</p>
      <h4>
        Continue to dashboard and upload your other requirements{" "}
        <span onClick={() => handleRedirect()}>here</span>
      </h4>
    </div>
  );
}

export default Success;
