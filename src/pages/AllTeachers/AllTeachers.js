import React from "react";
import "./AllTeachers.css";
import Navbar from "../Landing/Navbar";
import teachersData from "../../shared/teachersData";
import TeacherCard from "../Landing/About/TeacherCard";

function AllTeachers() {
  return (
    <div className="allteachers">
      <Navbar />
      <h1>School Heads and Teachers</h1>
      <div className="allteachers__cards">
        {teachersData.map((teacher) => (
          <TeacherCard
            name={teacher.name}
            position={teacher.position}
            category={teacher.category}
            img={teacher.image}
          />
        ))}
      </div>
    </div>
  );
}

export default AllTeachers;
