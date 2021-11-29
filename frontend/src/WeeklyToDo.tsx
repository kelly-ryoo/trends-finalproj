import React, { useState } from 'react';
import './App.css';
import DailyToDo from './DailyToDo'
import ToDoList from './ToDoList'
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

const WeeklyToDo = () => {
  const [toDoLists, setToDoLists] = useState<typeof ToDoList[]>([])

  return (
    <Container className="ContainerWrap">
      <Row><Header head="Weekly Planner" subheaderItalics="✨ A place for you to plan your upcoming week." subheaderNormal=""></Header></Row>

      <Row className="weeklyPlanner">
        <Col sm={6}><div className="card"><DailyToDo day="🌸 Monday"></DailyToDo></div></Col>
        <Col sm={6}><div className="card"><DailyToDo day="🌱 Tuesday"></DailyToDo></div></Col>
        <Col sm={6}><div className="card"><DailyToDo day="💫 Wednesday"></DailyToDo></div></Col>
        <Col sm={6}><div className="card"><DailyToDo day="🌻 Thursday"></DailyToDo></div ></Col>
        <Col sm={6}><div className="card"><DailyToDo day="⭐️ Friday"></DailyToDo></div ></Col>
        <Col sm={6}><div className="card"><DailyToDo day="🌼 Saturday"></DailyToDo></div ></Col>
        <Col sm={6}><div className="card"><DailyToDo day="🍀 Sunday"></DailyToDo></div ></Col>
        <Col sm={6}><div className="card"><DailyToDo day="✨ Other"></DailyToDo></div ></Col>
      </Row >
    </Container >
  );
}

export default WeeklyToDo;