import React from "react";
import logo from '../assests/todo_icon.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="d-flex nav-background fixed-navbar">
      <img src={logo} alt="Todo_Logo" width={100} />
      <h4 className="nav-title">Todo Application</h4>
    </div>
  );
};

export default Navbar;
