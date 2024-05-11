// React imports
import { useState, useContext, createContext } from 'react';

const PropertyContext: React.Context<any> = createContext(null)

export const useProperty = () => {
	return (
		useContext(PropertyContext)
	)
}

export const PropertyProvider = ({children}: any) => {
	const [ businessTypeId, setBusinessTypeId ] = useState(1);
	const [ propertyTypeId, setPropertyTypeId ] = useState(1);
	const [ businessType, setBusinessType ] = useState("comprar");
	const [ propertyType, setPropertyType ] = useState("apartamento");
	
	const [ rooms, setRooms ] = useState(2);
	const [ suites, setSuites ] = useState(1);
	const [ bathrooms, setBathrooms ] = useState(1);
	const [ garages, setGarages ] = useState(2);
	const [ pool, setPool ] = useState(0);
	const [ netArea, setNetArea ] = useState(65);
	const [ currentPosition, setCurrentPosition ] = useState(65);
	
	return (
		<PropertyContext.Provider value={{
			businessTypeId, setBusinessTypeId,
			propertyTypeId, setPropertyTypeId,
			businessType, setBusinessType,
			propertyType, setPropertyType,
			
			rooms, setRooms,
			suites, setSuites,
			bathrooms, setBathrooms,
			garages, setGarages,
			pool, setPool,
			netArea, setNetArea,
			currentPosition, setCurrentPosition
		}}>
			{children}
		</PropertyContext.Provider>
	)
}

PropertyContext.displayName = "PropertyContext";