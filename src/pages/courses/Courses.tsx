import React from "react";
import Map from '../../components/Map'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function DisplayMap() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  
  return (
    <Wrapper apiKey={"AIzaSyAF_fxanvKuvzC2V0bc2rYk5g7nAm_JaOU"} render={render}>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  );
}

function Courses() {
  return (
    <div>
      <h1>COURSE SELECTOR</h1>
      <p>Find courses near you.</p>
      <button onClick={DisplayMap}>Display Map</button>
    </div>
  );
}

export default Courses;
