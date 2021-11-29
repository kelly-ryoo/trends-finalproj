import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';
import AddTaskBar from './AddTaskBar'
import { Task } from './App'
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

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
    <Container className="ContainerWrap">
      <Header head="Planner of Name" subheaderItalics="✨ Welcome Back! It's a good day to have a good day. " subheaderNormal="☺"></Header>

      <Row>
        <Col xs={6} className="homeToDoListWrapper">
          <ToDoList tasks={tasks} taskHeader="📋  Your To-Do List" />
          <AddTaskBar addTask={addTask} />
        </Col>
        <Col xs={6} className="homeCalendarWrapper">
          <h3 className="homeCal">📅  Your Calendar</h3>
          <iframe className="homeCalEl" src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"></iframe>
        </Col>
      </Row>
    </Container >)
    ;
}

export default Home