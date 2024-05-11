// React imports
import { createContext, useState, useContext } from 'react';

const VisibilityContext: React.Context<any> = createContext(null)

export const useVisibility = () => {
	return (
		useContext(VisibilityContext)
	)
}

export const VisibilityProvider = ({children}: any) => {
	const [ activeGnrt, setActiveGnrt ] = useState(false);
	const [ activeResume, setActiveResume ] = useState(false);
	const [ extraTools, setExtraTools ] = useState(false);
	
	return (
		<VisibilityContext.Provider 
			value={{
				activeGnrt, setActiveGnrt,
				activeResume, setActiveResume,
				extraTools, setExtraTools
			}}
		>
			{children}
		</VisibilityContext.Provider>
	)
}

VisibilityContext.displayName = "VisibilityContext";