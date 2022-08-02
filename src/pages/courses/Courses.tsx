
import Map from './Map';
import { courseList } from './courseslist';
import './courses.css';
import React, { useState } from 'react';
import Map2 from './Map2';

let foundCourse = courseList[0];
let latLng = [foundCourse.lat, foundCourse.lng];

const Courses = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const entered = event.target.value;
    setQuery(entered);
  }

  const search = () => {
    setResult(query);
    for (let i = 0; i < courseList.length; i++) {
      if (result.toLowerCase() === courseList[i].srch.toLowerCase()) {
        latLng[0] = courseList[i].lat;
        latLng[1] = courseList[i].lng;
      }
    }
    alert(latLng);
  }

  return (
    <div className='bicolumn'>
      <div className='infoColumn'>
        <input value={query} onChange={handleChange} placeholder='look for a course' className='input' />
        <button onClick={search}>Go</button>
      </div>
      <Map lat={latLng[0]} lng={latLng[1]} />
    </div>
  );
}

export default Courses;