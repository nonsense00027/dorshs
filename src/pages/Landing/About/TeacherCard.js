import React from "react";
import fifth from "../../../img/fifth.png";

function TeacherCard({ name, position, category, img }) {
  return (
    <div className="teacherCard">
      <div className="teacherCard__image">
        <img src={img} alt="" />
      </div>
      <div className="teacherCard__info">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className="teacherCard__footer">
        <p>{category}</p>
      </div>
    </div>
  );
}

export default TeacherCard;
