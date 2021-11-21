import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';
import AddTaskBar from './AddTaskBar'
import { Task } from './App'

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [index, setIndex] = useState(0);

  const addTask = (task: string) => {
    const newItems = [...tasks, {
      task,
      completed: false,
      index,
    }];

    setTasks(newItems);
    setIndex(index + 1);
  };

  return (
    <div className="Home">
      <h1>Planner of Name</h1>
      <span>Welcome back Name!</span>
      <ToDoList tasks={tasks} />
      <AddTaskBar addTask={addTask} />
    </div>)
    ;
}

export default Home