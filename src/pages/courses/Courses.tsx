import React from "react";
import '../stylePages.css';
import icon from '../../test.svg';
import Button from "../../components/styledComponents/Button";
import ListItem from "../../components/styledComponents/ListItem";
import '../../data-sources/course-body.txt';


function Courses() {
  return (
    <div className='page'>
      <h1 className='pageTitle'>
        <img src={icon} className='icon' alt='icon' />
        Find a Course Near You
      </h1>

      <ListItem> Boston EMS 
        <a href="https://www.boston.gov/departments/emergency-medical-services">
          <Button>Go!</Button>
        </a>
      </ListItem>

      <ListItem> Boston University
        <a href="https://www.bu.edu/fitrec/certification/emergency-medical-response/">
          <Button>Go!</Button>
        </a>
      </ListItem>

      <ListItem> EMS Training, LLC 
        <a href="https://www.emstraininginc.com/">
          <Button>Go!</Button>
        </a>
      </ListItem>

      <ListItem> EMT Academy 
        <a href="https://emtacademy.org/">
          <Button>Go!</Button>
        </a>
      </ListItem>

      <p className='pageText'>    This is a text file, it will serve as the makeup of the courses page for testing reasons. I will need to provide a lot of words to see if the wrap effect takes hold. While I am sitting here rambling, I'm gonna go ahead and say the </p>
    </div>
  );
}

export default Courses;
