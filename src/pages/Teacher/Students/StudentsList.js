import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";

function StudentsList({ students, handleSelectStudent, selectedStudent }) {
  return (
    <div className="studentsList">
      <h3>List of Students</h3>
      <List component="nav" aria-label="secondary mailbox folders">
        {students.map((student) => (
          <ListItem
            button
            key={student.id}
            dense
            onClick={() => handleSelectStudent(student)}
          >
            <ListItemAvatar>
              <Avatar alt={student.lastname} src={student.idPicture} />
            </ListItemAvatar>
            <ListItemText
              id={student.id}
              primary={`${student.lastname}, ${student.firstname}`}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={selectedStudent?.id === student.id}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default StudentsList;
