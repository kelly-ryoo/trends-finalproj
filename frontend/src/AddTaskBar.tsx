import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import type { Task } from './App';
import { Row, Col } from 'react-bootstrap';

type Props = {
  addTask: (name: string) => void;
}

type NewTaskProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const NewTask = ({ tasks, setTasks }: NewTaskProps) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(true);
  const [index, setIndex] = useState(0);

  const createTask = async () => {
    const newTask = { task, completed, index };
    const { data } = await axios.post<string>('/createTask', newTask);
    const newTaskWithID = { ...newTask, id: data };
    setTasks([...tasks, newTaskWithID]);
  }

  return (
    <div>
      <Row className="taskBarWrapper">
        <Col className="" xs={11}><input className="addTaskInput" placeholder=" your next task . . ." value={task} onChange={(e) => setTask(e.target.value)}></input></Col>
        <Col className="taskButtonWrapper" xs={1}><button className="addTaskButton" onClick={createTask} disabled={task === ''}>Add</button></Col>
      </Row>
    </div>
  );
};


const AddTaskBar = ({ addTask }: Props) => {
  const [taskToAdd, setTaskToAdd] = useState("");

  return (<div>
    <Row className="taskBarWrapper">
      <Col className="" xs={11}>
        <input className="addTaskInput" placeholder=" your next task . . ." value={taskToAdd} onChange={(e) => setTaskToAdd(e.target.value)}></input></Col>
      <Col className="taskButtonWrapper" xs={1}>
        <button className="addTaskButton" onClick={() => {
          addTask(taskToAdd);
        }} disabled={taskToAdd === ''}>Add</button></Col>
    </Row>
  </div>);
}

export default AddTaskBar