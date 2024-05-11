// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const NeighboursApiContext: React.Context<any> = createContext(null)

export const useNeighboursApi = () => {
	return (useContext(NeighboursApiContext))
}

export const NeighboursApiProvider = ({children}: any) => {
	const [ neighboursData, setNeighboursData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
		  	const tempUrl = `
		    	${process.env.REACT_APP_API_URL}/
		    	neighbours_api
		    `
		  	const url = tempUrl.replace(/\s/g, '');
		    const res = await fetch(url);
		    const receivedData = await res.json();
		    setNeighboursData(receivedData[0]);
		}
		fetchData();
	}, []);

	return (
		<NeighboursApiContext.Provider value={{ neighboursData }}>
			{children}
		</NeighboursApiContext.Provider>
	)
}

NeighboursApiContext.displayName = "NeighboursApiContext";