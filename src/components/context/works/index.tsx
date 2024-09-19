// React imports
import { useState, useEffect, createContext, useContext } from 'react';

// App imports
import { descriptions } from './descriptions';

const WorksContext: React.Context<any> = createContext(null)

export const useWorks = () => {
	return (
		useContext(WorksContext)
	)
}

export const WorksProvider = ({children}: any) => {
	const [ currentWork, setCurrentWork ] = useState<any>("m2b");
	const [ description, setDescription ] = useState<any>(descriptions[currentWork]);
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ m2bTheme, setM2bTheme ] = useState("What");
	const [ jukkaTheme, setJukkaTheme ] = useState("What");
	const [ airbnbTheme, setAirbnbTheme ] = useState("What");

	useEffect(() => {
		setDescription(descriptions[currentWork])
	}, [currentWork])
	
	return (
		<WorksContext.Provider 
			value={{
				currentWork, setCurrentWork,
				description, setDescription,
				m2bTheme, setM2bTheme,
				jukkaTheme, setJukkaTheme,
				airbnbTheme, setAirbnbTheme,
				activeIndex, setActiveIndex
			}}
		>
			{children}
		</WorksContext.Provider>
	)
}

WorksContext.displayName = "WorksContext";