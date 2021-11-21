import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

export type Task = {
  task: string;
  completed: boolean;
  index: number;
}

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
