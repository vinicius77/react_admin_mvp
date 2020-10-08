import React from "react";
import { Create, SimpleForm, DateInput, TextInput } from "react-admin";

const TaskCreate = props => {
  return (
    <Create title="Create a Task" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        {/** It is multiline because the body of the task may not fit in a single line*/}
        <TextInput multiline source="body" />
        <DateInput label="Created" source="created_at" />
      </SimpleForm>
    </Create>
  );
};

export default TaskCreate;
