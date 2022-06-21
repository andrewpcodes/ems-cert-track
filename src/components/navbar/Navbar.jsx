import React from 'react';
import { Link } from 'react-router-dom';
  
const Checklist = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checklist">Checklist</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  );
};
  
export default Checklist;