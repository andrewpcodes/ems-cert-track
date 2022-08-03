import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Grid, List, ListItem } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';
import { style } from './style';
import CourseSelector from '../course-selector/CourseSelector';

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

export default function BostonEMSMap() {
    return (
        <Grid container style={style.page}>
            <CourseSelector />
            <List style={style.info}>
                <ListItem style={style.title}>Boston EMS</ListItem>
                <ListItem>Boston, MA</ListItem>
                <ListItem>Approved Levels: EMT</ListItem>
                <ListItem>Region IV</ListItem>
                <ListItem>MA DPH accreditation expires 11/1/2023</ListItem>
            </List>
            <MapView style={style.map}
                initialViewState={{
                    latitude: 42.33443341004974,
                    longitude: -71.07411795231975,
                    zoom: 14,
                }}
            />
        </Grid>
    );
}