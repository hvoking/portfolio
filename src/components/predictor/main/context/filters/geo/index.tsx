// React imports
import { useState, useRef, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const [ basemap, setBasemap ] = useState("mapbox://styles/hvoking/clrwzn1jo015q01nl53664m2c");
	const [ neighbourId, setNeighbourId ] = useState(29);

	const [ viewport, setViewport ] = useState(Locations.blumenau);
	
	const [ placeCoordinates, setPlaceCoordinates ] = useState({ 
		latitude: viewport.latitude, 
		longitude: viewport.longitude 
	});

	useEffect(() => {
	  setViewport({...viewport, ...placeCoordinates});
	}, [ placeCoordinates ]);

	const mapRef = useRef<any>();

	useEffect(() => {
		mapRef.current?.flyTo({
			center: [ viewport.longitude, viewport.latitude ],
			zoom: viewport.zoom,
			duration: 3000, 
			essential: true,
		});
	}, [ viewport ]);

	return (
		<GeoContext.Provider value={{
			mapRef,
			basemap, setBasemap,
			viewport, setViewport,
			placeCoordinates, setPlaceCoordinates,
			Locations,
			neighbourId, setNeighbourId
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";