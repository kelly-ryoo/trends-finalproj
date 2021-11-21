import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'

const WeeklyToDo = () => {
  const [toDoLists, setToDoLists] = useState<typeof ToDoList[]>([])

  return (<div>
    <h3>Monday</h3>
    {/* <ToDoList tasks={toDoLists[0]} />
    <ToDoList />
    <ToDoList /> */}
  </div>);
}

export default WeeklyToDo;