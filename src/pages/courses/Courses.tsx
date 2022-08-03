import { Button } from "@mui/material";
import React from "react";
import Map from "./Map";
import './courses.css';

let course: string;

function Courses() {
  return (
    <div className='coursePage'>
      <div className='buttons'>
        <Button style={{
          position: 'absolute',
          top: '40%',
        }} onClick={() => {
          course = 'BostonEMS';
        }}>Boston EMS</Button>
        <Button style={{
          position: 'absolute',
          top: '50%',
        }} onClick={() => {
          course = 'BostonUniversity'
        }}>Boston University</Button>
        <Button style={{
          position: 'absolute',
          top: '60%',
          }} onClick={() => {
            course = 'EMSAcademy'
        }}>EMS Academy</Button>
      </div>
      <Map course={course} />
    </div>
  );
}

export default Courses;
