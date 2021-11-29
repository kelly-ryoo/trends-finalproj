import React from 'react';
import './App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Dropdown className="d-flex justify-content-end">
      <DropdownButton variant="light" align="end" className="menuButton" title="menu" id="dropdown-menu-align-end">
        <div className="dropdown-items">

          <Dropdown.Item eventKey="1" className="menu-drop">
            <Link to="/">Home & Planner</Link>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item eventKey="2" className="menu-drop">
            <Link to="/WeeklyToDo">My Weekly Planner</Link>
          </Dropdown.Item>

          <Dropdown.Item eventKey="3" className="menu-drop">
            <Link to="/HabitTracker">My Habit Tracker</Link>
          </Dropdown.Item>
        </div>
      </DropdownButton>
    </Dropdown >
  );
}

export default NavBar