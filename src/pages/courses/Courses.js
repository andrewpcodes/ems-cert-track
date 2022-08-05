
import { useState } from 'react';
import { Marker } from 'react-map-gl';
import { Grid, Link, Button, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

import { styling } from './styling';
import { courses } from './courseInfo';

import { MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsExports);


const defaultCourse = {
    id: 0,
    label: 'Select a course from the left to find out more',
    coordinates: {
        latitude: 42,
        longitude: -71,
    },
    factoids: {
        city: '',
        levelsOffered: '',
        region: '',
        expiration: '',
    }
}

let currentCourse = defaultCourse;
let factoids = Object.entries(defaultCourse.factoids);

const Courses = () => {
    const [coordinates, setCoordinates] = useState(defaultCourse.coordinates);

    const updateMap = (course) => {
        setCoordinates(course.coordinates);
        currentCourse = course;
        factoids = Object.entries(course.factoids);
    };

    const openLinkNewTab = (courseURL) => {
        window.open(courseURL);
    };

    return (
        <Grid container sx={styling.page}>
            <Typography variant='h3' sx={styling.title}>Find a Course Near You</Typography>
            <Grid item sx={styling.courses}>
                {courses.map((course) => (
                    <Button
                        startIcon={<PublicIcon />} variant='outlined' 
                        sx={styling.buttons} onClick={() => updateMap(course)}
                    >
                        {course.label}
                    </Button>
                ))}
            </Grid>
            <Grid item sx={styling.information}>
                <Typography 
                    variant='h6' gutterBottom={true}
                    sx={styling.courseName}
                >
                    {currentCourse.label}
                </Typography>
                {factoids.map(([fact, oid]) => (
                    <Typography variant='body2' fontStyle='italic'>{oid}</Typography>
                ))}
                {currentCourse === defaultCourse ? null : 
                    <Link sx={{cursor: 'crosshair'}} onClick={() => openLinkNewTab(currentCourse.route)}>
                        site
                    </Link>
                }    
            </Grid>
            <Grid sx={styling.mapContainer} item>
                <MapView style={styling.map}>
                    <Marker latitude={coordinates.latitude} longitude={coordinates.longitude} />
                </MapView>
            </Grid>
        </Grid>
    )
}

export default Courses