import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton
} from "react-admin";

const TaskList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="created_at" />
        <EditButton basePath="/tasks" />
        <DeleteButton basePath="/tasks" />
      </Datagrid>
    </List>
  );
};

export default TaskList;
