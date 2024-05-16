// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useCircleDimensions } from '../../../filters/dimensions/circle';
import { useGeo } from '../../../filters/geo';

const CircleApiContext: React.Context<any> = createContext(null)

export const useCircleApi = () => {
	return (
		useContext(CircleApiContext)
	)
}

export const CircleApiProvider = ({children}: any) => {
	const { cityName, placeCoordinates } = useGeo();
	const { circleGeometry } = useCircleDimensions();

	const [ circleData, setCircleData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/polygon_api`, {
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({ 
					"polygon": JSON.stringify(circleGeometry.features[0].geometry),
			  		"longitude": JSON.stringify(placeCoordinates.longitude),
					"latitude": JSON.stringify(placeCoordinates.latitude),
				}),
			});
			const receivedData = await res.json();
			setCircleData(receivedData[0]);
		}
		circleGeometry && fetchData();
	}, [ circleGeometry ]);

	return (
		<CircleApiContext.Provider value={{ circleData }}>
			{children}
		</CircleApiContext.Provider>
	)
}

CircleApiContext.displayName = "CircleApiContext";