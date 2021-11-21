import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';
import AddTaskBar from './AddTaskBar'
import { Task } from './App'
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container className="homeContainer">
      <div className="home">
        <Row><Col><h1 className="plannerHeader">Planner of Name</h1></Col></Row>
        <p className="welcomeBack">
          ✨ Welcome Back Name! It is currently Monday.
        </p>

        <hr></hr>

        <Row>
          <Col xs={6} className="homeToDoListWrapper">
            <ToDoList tasks={tasks} />
            <AddTaskBar addTask={addTask} />
          </Col>
          <Col xs={6} className="homeCalendarWrapper">
            <h3 className="homeCal">📅  Your Calendar</h3>
            <iframe className="homeCalEl" src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"></iframe>
          </Col>
        </Row>
      </div>
    </Container>)
    ;
}

export default Home