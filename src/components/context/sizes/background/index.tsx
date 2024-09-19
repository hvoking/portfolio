// React imports
import { useState, useContext, createContext } from 'react';

const BackgroundSizesContext: React.Context<any> = createContext(null)

export const useBackgroundSizes = () => {
	return (
		useContext(BackgroundSizesContext)
	)
}

export const BackgroundSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 0, bottom: 0, left: 0, right: 0}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<BackgroundSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</BackgroundSizesContext.Provider>
	)
}

BackgroundSizesContext.displayName = "BackgroundSizesContext";