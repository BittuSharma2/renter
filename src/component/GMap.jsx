import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GMap() {
  const mapContainerStyle = {
    height: "800px",
    width: "90%"
  };

  const center = {
    lat: 25.4956185,
    lng: 81.8558918
  };

  return (
    <div className='flex justify-center items-center'>

    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        options={{
          // disableDefaultUI: true, // Disables all default UI
          // zoomControl: true, // Adds zoom control
          mapTypeId: 'hybrid' // Switches to satellite view
        }}
      >
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>

    </div>
  );
}

export default GMap;
