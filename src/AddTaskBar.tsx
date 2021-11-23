import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  addTask: (name: string) => void;
}

const AddTaskBar = ({ addTask }: Props) => {
  const [task, setTask] = useState("");

  return (<div>
    <Row className="taskBarWrapper">
      <Col className="" xs={11}><input className="addTaskInput" placeholder=" your next task . . ." value={task} onChange={(e) => setTask(e.target.value)}></input></Col>
      <Col className="taskButtonWrapper" xs={1}><button className="addTaskButton" onClick={() => {
        addTask(task);
        setTask("");
      }} disabled={task === ''}>Add</button></Col>
    </Row>
  </div>);
}

export default AddTaskBar