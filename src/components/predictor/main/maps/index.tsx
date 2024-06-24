// React imports
import { useCallback } from 'react';

// Context imports
import { useGeo } from '../context/filters/geo';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
  const { basemap, mapRef, viewport, setPlaceCoordinates } = useGeo();

  const onDblClick = useCallback((e: any) => {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setPlaceCoordinates({ longitude: lng, latitude: lat });
  }, []); 

  return (
    <div className="predictor-map">
      <Map
        ref={mapRef}
        mapStyle={basemap}
        initialViewState={viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        doubleClickZoom={false}
        onDblClick={onDblClick}
      >
      </Map>
    </div>
  );
}

Maps.displayName="Maps";