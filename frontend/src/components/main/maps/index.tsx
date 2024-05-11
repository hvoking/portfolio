// React imports
import { useCallback } from 'react';

// App imports
import { Pin } from './pin';
import { MapControllers } from './controllers';
import { BasemapsSelectors } from './basemaps';
import { Selectors } from './selectors';
import { SVGMap } from './svgmap';
import { Location } from './location';
import './styles.scss';

// Layers imports
import { Layers } from './layers';

// Context imports
import { useGeo } from '../context/filters/geo';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
  const { mapRef, basemap, viewport, setPlaceCoordinates } = useGeo();

  const onDblClick = useCallback((e: any) => {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setPlaceCoordinates({ longitude: lng, latitude: lat });
  }, []); 

  return (
    <div className="map-wrapper">
      <SVGMap/>
      <Map
        ref={mapRef}
        mapStyle={basemap}
        initialViewState={viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        doubleClickZoom={false}
        onDblClick={onDblClick}
      >
        <Layers/>
        <MapControllers/>
        <Pin/>
      </Map>
      <BasemapsSelectors/>
      <Selectors/>
      <Location/>
    </div>
  );
}

Maps.displayName="Maps";