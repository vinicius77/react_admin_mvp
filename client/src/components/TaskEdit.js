import React from "react";
import { Edit, SimpleForm, DateInput, TextInput } from "react-admin";

const TaskEdit = props => {
  return (
    <Edit title="Edit Task" {...props}>
      <SimpleForm>
        {/** Disabled to avoid the edition of the id field but rendering it anyway*/}
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Created" source="created_at" />
      </SimpleForm>
    </Edit>
  );
};

export default TaskEdit;
