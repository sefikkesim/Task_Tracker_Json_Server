import React from 'react';
import {NavLink} from "react-router-dom"
import Style from "../styles/Navbar.css";

function Navbar() {
    return (
      <nav className="main-nav">
          <h1>Task Tracker</h1>
        <NavLink className={(navData) => navData.isActive && "active-style"} to="/home" >
          Home
        </NavLink>
        <NavLink className ={(navData)=> navData.isActive && "active-style"} to="/create-exercise">
        
          Create Excercise
        </NavLink>
      </nav>
    );
}

export default Navbar
