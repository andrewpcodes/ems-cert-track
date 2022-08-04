import React from 'react';
import { MapView } from '@aws-amplify/ui-react';
import { courses } from './courseInfo';

const Map = () => {
  const locationOfCourse = localStorage.getItem('locationKey');
  console.log(courses[locationOfCourse].coordinates);

  return (
    <div>
        <MapView initialViewState={{
            latitude: courses[locationOfCourse].coordinates.latitude,
            longitude: courses[locationOfCourse].coordinates.longitude,
            zoom: 10,
        }} />
    </div>
  )
}

export default Map