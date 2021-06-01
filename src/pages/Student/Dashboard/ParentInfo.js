import React from "react";
import ParentGuardianInfo from "./ParentGuardianInfo";

export default function BasicTextFields({ student }) {
  return (
    <div className="parentInfo">
      <ParentGuardianInfo
        label="Father"
        lastname={student.fatherLastname}
        firstname={student.fatherFirstname}
        middlename={student.fatherMiddlename}
        education={student.fatherEducation}
        employment={student.fatherEmployment}
        number={student.fatherNumber}
        workingQuarantine={student.fatherWorkingQuarantine}
      />
      <ParentGuardianInfo
        label="Mother"
        lastname={student.motherLastname}
        firstname={student.motherFirstname}
        middlename={student.motherMiddlename}
        education={student.motherEducation}
        employment={student.motherEmployment}
        number={student.motherNumber}
        workingQuarantine={student.motherWorkingQuarantine}
      />
      <ParentGuardianInfo
        label="Guardian"
        lastname={student.guardianLastname}
        firstname={student.guardianFirstname}
        middlename={student.guardianMiddlename}
        education={student.guardianEducation}
        employment={student.guardianEmployment}
        number={student.guardianNumber}
        workingQuarantine={student.guardianWorkingQuarantine}
      />
    </div>
  );
}
