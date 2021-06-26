import React from "react";
import "./About.css";
import Card from "./Card";
import TeacherCard from "./TeacherCard";

function Teachers() {
  return (
    <div className="teachers">
      <div className="meetTeachers">
        <h2>Meet The School Heads and Teachers</h2>
        <hr />
      </div>
      <div className="teachers__carousel">
        <TeacherCard
          name={"Alma Briones"}
          position={"Principal"}
          category={"Principal II"}
        />
        <TeacherCard
          name={"Edga Samson"}
          position={"Curriculum Head"}
          category={"Master Teacher I - Math 8"}
        />
        <TeacherCard
          name={"Mariafe Dumaran"}
          position={"SHS Focal Person"}
          category={"Master Teacher I - Chemistry and Biology"}
        />
      </div>
      {/* <div className="row">
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Card />
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Teachers;
