import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <MapView 
      style = {{
        width: '100%',
        height: '100%',
      }}
    >
      <Marker
        key = 'marker'
        coordinate = {{
          latitude: 0,
          longitude: 0,
        }}
        icon = { require('./assets/marker.png') }
      />
    </MapView>
  );
}
