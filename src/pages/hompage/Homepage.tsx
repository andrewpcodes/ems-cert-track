import React from "react";
import '../stylePages.css';
import icon from '../../test.svg';

function Homepage() {
  return (
    <div>
      <h1 className='pageTitle'>
        <img src={icon} className='icon' alt='icon' />
        Welcome 
      </h1>
      <p className='pageText'>
        Here is some test text
      </p>
    </div>
  );
}

export default Homepage;
