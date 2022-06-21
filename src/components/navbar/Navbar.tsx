import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/checklist">Checklist</Link>
      </li>
      <li>
        <Link to="/rectification">Rectification</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register Account</Link>
      </li>
    </ul>
  );
}

export default Navbar;
