// React imports
import { useState, useContext, createContext } from 'react';

const GridContext: React.Context<any> = createContext(null)

export const useGrid = () => {
	return (
		useContext(GridContext)
	)
}

export const GridProvider = ({children}: any) => {
    const [ currentMousePosition, setCurrentMousePosition ] = useState<any>(null);

    const onMouseMove = (event: any) => {
        setCurrentMousePosition({x: event.clientX, y: event.clientY})
    }

	return (
		<GridContext.Provider value={{ 
            currentMousePosition, setCurrentMousePosition,
            onMouseMove
		}}>
			{children}
		</GridContext.Provider>
	)
}

GridContext.displayName = "GridContext";