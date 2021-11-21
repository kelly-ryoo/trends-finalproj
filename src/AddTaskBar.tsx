import React, { useState } from 'react';
import './App.css';

type Props = {
  addTask: (name: string) => void;
}

const AddTaskBar = ({ addTask }: Props) => {
  const [task, setTask] = useState("");

  return (<div>
    <input className="addTaskInput" value={task} onChange={(e) => setTask(e.target.value)}></input>
    <button className="addTaskButton" onClick={() => {
      addTask(task);
      setTask("");
    }} disabled={task === ''}>Add</button>
  </div>);
}

export default AddTaskBar