import React, { useState } from 'react';
import type { Task } from './App';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  readonly tasks: Task[];
}

const ToDoList = ({ tasks }: Props) => {
  const [taskL, setTaskL] = useState<Task[]>([]);

  return (
    <div className="homeTasksList">
      <h3 className="homeToDoListHeader">📋  Your To-Do List</h3>
      <div className="taskList">
        {tasks.map(x =>
          <div className="task">
            <input type="checkbox" className="taskCheckbox"></input>
            <label className="taskName">{x.task}</label>
          </div>
        )}
      </div>
    </div>)
    ;
}

export default ToDoList;