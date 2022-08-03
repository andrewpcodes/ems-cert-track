import { MapView, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { style } from './style';

import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

export default function BostonEMSMap() {
    const navigate = useNavigate();

    return (
        <Grid style={{marginTop: '65px'}}>
            <Button onClick={() => {
                navigate('/courses')
            }}>Back to course list</Button>
            <Text style={style.title}>Boston EMS</Text>
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