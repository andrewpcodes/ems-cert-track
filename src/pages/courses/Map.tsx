import { MapView, LocationSearch } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

const BostonEMS = {
  course: 'BostonEMS',
  latitude: 42.33443341004974,
  longitude: -71.07411795231975,
}

const BostonUniversity = {
  course: 'BostonUniversity',
  latitude: 42.35231393693149,
  longitude: -71.10543018318185
}

const EMSAcademy = {
  course: 'EMSAcademy',
  latitude: 42.25155326554675,
  longitude: -71.00369200489789,
}

interface Props {
  course: string
};

export default function Map(course: Props) {
  return (
    <MapView style={{
      height: '500px',
      width: '500px',
      position: 'absolute',
      left: '50%',
      top: '12%',
    }}>
      <LocationSearch proximity={BostonEMS} />
    </MapView>
  );
}