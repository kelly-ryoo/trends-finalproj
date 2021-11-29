import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';
import AddTaskBar from './AddTaskBar'
import { Task } from './App'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

type Props = {
  readonly head: string;
  readonly subheaderItalics: string;
  readonly subheaderNormal: string;
}

const Header = ({ head, subheaderItalics, subheaderNormal }: Props) => {

  return (
    <div className="home">
      <Row><Col><h1 className="head">{head}</h1></Col></Row>
      <Row>
        <Col xs={8}>
          <p className="subheader">
            <span className="subheaderItalics">{subheaderItalics}</span>{subheaderNormal}
          </p>
        </Col>
        <Col xs={4}><NavBar></NavBar></Col>

      </Row>

      <hr></hr>

    </div>)
    ;
}

export default Header