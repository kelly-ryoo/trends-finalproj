import React, { useState } from 'react';
import './App.css';
import type { Task } from './App';

type Props = {
  readonly tasks: Task[];
}

const ToDoList = ({ tasks }: Props) => {
  const [taskL, setTaskL] = useState<Task[]>([]);

  return (<div>
    {tasks.map(x =>
      <div>
        <input type="checkbox"></input>
        <label>{x.task}</label>
      </div>
    )}
  </div>)
    ;
}

export default ToDoList;