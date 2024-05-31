// React imports
import { useCallback } from 'react';

// Context imports
import { useGeo } from '../context/filters/geo';

// Layer imports
import { useNeighboursLayer } from '../context/maps/layers/neighbours';

// Third-party imports
import { Map, useControl } from 'react-map-gl';
import { DeckProps } from '@deck.gl/core';
import { MapboxOverlay } from '@deck.gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const Maps = () => {
  const { basemap, mapRef, viewport, setPlaceCoordinates } = useGeo();

  // Layers
  const { neighboursLayer } = useNeighboursLayer();

  const layers = [ neighboursLayer ];

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
        <DeckGLOverlay layers={layers}/>
      </Map>
    </div>
  );
}

Maps.displayName="Maps";