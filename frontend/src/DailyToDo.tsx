import React, { useState } from 'react';
import type { Task } from './App'
import './App.css';
import AddTaskBar from './AddTaskBar'
import ToDoList from './ToDoList'

type Props = {
  readonly day: string;
}

const DailyToDoList = ({ day }: Props) => {
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
    <div className="dailyToDoWrapper">
      <ToDoList tasks={tasks} taskHeader={day} />
      <AddTaskBar addTask={addTask} />
    </div>
  );
}

export default DailyToDoList