import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Grid, List, ListItem } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';
import { style } from './style';
import CourseSelector from '../course-selector/CourseSelector';

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

export default function EMSAcademyMap() {

    return (
        <Grid container style={style.page}>
            <CourseSelector />
            <List style={style.info}>
                <ListItem style={style.title}>EMS Academy</ListItem>
                <ListItem>Springfield, MA</ListItem>
                <ListItem>Approved Levels: EMT</ListItem>
                <ListItem>Region III</ListItem>
                <ListItem>MA DPH accreditation expires 8/1/2025</ListItem>
            </List>
            <MapView style={style.map}
                initialViewState={{
                    latitude: 42.25155326554675,
                    longitude: -71.00369200489789,
                    zoom: 14,
                }}
            />
        </Grid>
    );
}
