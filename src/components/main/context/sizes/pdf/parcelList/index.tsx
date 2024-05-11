// React imports
import { useState, useContext, createContext } from 'react';

const ParcelListSizesContext: React.Context<any> = createContext(null)

export const useParcelListSizes = () => {
	return (
		useContext(ParcelListSizesContext)
	)
}

export const ParcelListSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 5, bottom: 5, left: 5, right: 5}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<ParcelListSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</ParcelListSizesContext.Provider>
	)
}

ParcelListSizesContext.displayName = "ParcelListSizesContext";