// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { usePolygonDimensions } from '../../../filters/dimensions/polygon';
import { useGeo } from '../../../filters/geo';

const PolygonApiContext: React.Context<any> = createContext(null)

export const usePolygonApi = () => {
	return (
		useContext(PolygonApiContext)
	)
}

export const PolygonApiProvider = ({children}: any) => {
	const { cityName } = useGeo();
	const { polygonGeometry } = usePolygonDimensions();

	const [ polygonData, setPolygonData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/polygon_api`, {
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({ 
					"polygon": JSON.stringify(polygonGeometry.features[0].geometry),
					"city_name": cityName
				}),
			});
			const receivedData = await res.json();
			setPolygonData(receivedData[0]);
		}
		polygonGeometry && fetchData();
	}, [ polygonGeometry ]);

	return (
		<PolygonApiContext.Provider value={{ polygonData }}>
			{children}
		</PolygonApiContext.Provider>
	)
}

PolygonApiContext.displayName = "PolygonApiContext";