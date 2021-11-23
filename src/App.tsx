import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import WeeklyToDo from './WeeklyToDo';
import HabitTracker from './HabitTracker';
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
      {/*<HomePage></HomePage>
      <WeeklyToDo></WeeklyToDo>
      <HabitTracker></HabitTracker>*/}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/WeeklyToDo" element={<WeeklyToDo />}></Route>
          <Route path="/HabitTracker" element={<HabitTracker />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
