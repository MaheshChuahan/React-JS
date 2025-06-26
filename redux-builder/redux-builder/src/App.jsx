import React from "react";
import Tasklist from "./components/TaskList";
import AddTask from "./components/AddTask";

function App(){
  return(
    <div>
      <AddTask/>
      <Tasklist/>
    </div>
  )
}

export default App