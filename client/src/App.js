import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import TaskEdit from "./components/TaskEdit";

function App() {
  // http://localhost:3000" because json-server serves from PORT 3000 there even we set the proxy to PORT 5000
  // The delete method is working by standard (No need to "create" it)
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="tasks"
        list={TaskList}
        create={TaskCreate}
        edit={TaskEdit}
      />

      {/**

      TO ADD MORE RESOURCES THE PROCESS IS THE SAME AS ABOVE 
      
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      */}
    </Admin>
  );
}

export default App;
