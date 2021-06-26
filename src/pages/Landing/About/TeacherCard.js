import React from "react";
import fifth from "../../../img/fifth.png";

function TeacherCard({ name, position, category }) {
  return (
    <div className="teacherCard">
      <div className="teacherCard__image">
        <img src={fifth} alt="" />
      </div>
      <div className="teacherCard__info">
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
      <div className="teacherCard__footer">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default TeacherCard;
