import { Grid, Box } from '@mui/material';
import CourseSelector from './course-selector/CourseSelector';
import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { style } from './Maps/style';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const Courses = () => {
    return (
        <Grid container style={style.page}>
            <CourseSelector />
            <Text style={style.title}>Choose a Course</Text>
            <MapView style={style.map} 
                initialViewState={{
                    latitude: 0,
                    longitude: 0,
                    zoom: 0,
                }}
            />
        </Grid>
    )
}

export default Courses