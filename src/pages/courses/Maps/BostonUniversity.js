import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Grid, List, ListItem } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';
import { style } from './style';
import CourseSelector from '../course-selector/CourseSelector';

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

export default function BostonUniversityMap() {

    return (
        <Grid container style={style.page}>
            <CourseSelector />
            <List style={style.info}>
                <ListItem style={style.title}>Boston University</ListItem>
                <ListItem>Boston, MA</ListItem>
                <ListItem>Approved Levels: EMT</ListItem>
                <ListItem>Region IV</ListItem>
                <ListItem>MA DPH accreditation expires 6/1/2023</ListItem>
            </List>
            <MapView style={style.map}
                initialViewState={{
                    latitude: 42.35231393693149,
                    longitude: -71.10543018318185,
                    zoom: 14,
                }}
            />
        </Grid>
    );
}

