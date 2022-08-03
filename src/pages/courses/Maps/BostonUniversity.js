import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { style } from './style';

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

export default function BostonUniversityMap() {
    const navigate = useNavigate();

    return (
        <Grid style={{marginTop: '65px'}}>
            <Button onClick={() => {
                navigate('/courses')
            }}>Back to course list</Button>
            <Text style={style.title}>Boston University</Text>
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