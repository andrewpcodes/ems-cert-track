import { LocationSearch, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

export default function Map() {
  return (
    <MapView>
      <LocationSearch position='bottom-left' />
    </MapView>
  );
}