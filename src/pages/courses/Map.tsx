import { MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

interface Props {
    lat: number;
    lng: number;
}

export default function Map({lat, lng}: Props) {
  return (
    <MapView style={{
        height: '512px',
        width: '512px'
    }}
        initialViewState={{
        latitude: lat,
        longitude: lng,
        zoom: 16,
    }}/>
  );
}