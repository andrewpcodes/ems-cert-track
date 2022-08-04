import { Grid, List, Button, ListItem } from '@mui/material';
import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Marker } from 'react-map-gl';
import '@aws-amplify/ui-react/styles.css';
import { styling } from './styling';
//import Map from './Map';

import awsExports from '../../aws-exports';
import { courses } from './courseInfo';
import { useState } from 'react';
Amplify.configure(awsExports);

//let defaultLocation = 0;

const Courses = () => {
    const [coordinates, setCoordinates] = useState(courses[0].coordinates);
    //let locationOfCourse = defaultLocation;
    //localStorage.setItem('locationKey', locationOfCourse);

    const updateMap = (course) => {
        setCoordinates(course.coordinates);
        //localStorage.setItem('coordKey', coordinates);
        //defaultLocation = course === courses[0] ? true : false;
        //localStorage.setItem('locationKey', defaultLocation);

        //defaultLocation = course.id;
        //localStorage.setItem('locationKey', locationOfCourse);
        // eslint-disable-next-line no-restricted-globals
        //location.reload();
    };

    return (
        <Grid container style={styling.page}>
            <Grid item style={styling.buttons}>
                <List style={styling.list}>
                    {courses.map((course) => (
                        <Button onClick={() => updateMap(course)}>
                            {course.label}
                        </Button>
                    ))}
                </List>
            </Grid>
            <Grid item style={styling.information}>
                <Text style={styling.title}>Choose a Course</Text>
                <List style={styling.info}>
                    <ListItem>bullet1</ListItem>
                    <ListItem>bullet2</ListItem>
                    <ListItem>bullet3</ListItem>
                </List>
            </Grid>
            <Grid item style={styling.map}>
                <MapView>
                    <Marker latitude={coordinates.latitude} longitude={coordinates.longitude} />
                </MapView>
            </Grid>
        </Grid>
    )
}

export default Courses