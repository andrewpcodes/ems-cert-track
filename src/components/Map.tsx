import React, { useEffect, useRef, ReactElement } from "react";
import { ReactDOM } from "react";

function Map({center, zoom}: {center: google.maps.LatLngLiteral, zoom: number}) {
    let map: google.maps.Map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: center,
        zoom: zoom,
      });;

    const ref = useRef(map);

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" />;
}

export default Map;
