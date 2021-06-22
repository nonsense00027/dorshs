import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
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
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectedStudent?.id === student.id}
                tabIndex={-1}
                disableRipple
                // inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              primary={`${student.lastname}, ${student.firstname}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default StudentsList;
