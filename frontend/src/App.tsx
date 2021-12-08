import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import WeeklyToDo from './WeeklyToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export type Task = {
  task: string;
  completed: boolean;
  index: number;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/WeeklyToDo" element={<WeeklyToDo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
