// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useCircleApi } from '../../../api/geom/circle';

const ParcelsApiContext: React.Context<any> = createContext(null)

export const useParcelsApi = () => {
	return (useContext(ParcelsApiContext))
}

export const ParcelsApiProvider = ({children}: any) => {
	const { circleData } = useCircleApi();
	const [ parcelsData, setParcelsData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	parcels_api
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setParcelsData(receivedData[0][0]);
	  }
	  circleData && fetchData();
	}, [ circleData ]);

	return (
		<ParcelsApiContext.Provider value={{ parcelsData }}>
			{children}
		</ParcelsApiContext.Provider>
	)
}

ParcelsApiContext.displayName = "ParcelsApiContext";