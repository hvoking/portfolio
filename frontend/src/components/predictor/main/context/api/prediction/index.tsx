// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../../filters/geo';
import { useProperty } from '../../filters/property';

const PredictionApiContext: React.Context<any> = createContext(null);

export const usePredictionApi = () => {
	return (
		useContext(PredictionApiContext)
	)
}

export const PredictionApiProvider = ({children}: any) => {
  const { neighbourId } = useGeo();
  const { rooms, suites, bathrooms, garages, pool, netArea } = useProperty();
  
  const [ predictionData, setPredictionData ] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const tempUrl = `
        ${process.env.REACT_APP_API_URL}/
        prediction_api
        ?neighbour_id=${neighbourId}
        &net_area=${netArea}
        &suites=${suites}
        &rooms=${rooms}
        &bathrooms=${bathrooms}
        &garages=${garages}
        &pool=${pool}
      `;
      const url = tempUrl.replace(/\s/g, '');
      const res = await fetch(url);
      const receivedData = await res.json();
      setPredictionData(receivedData.valor.toLocaleString('en').replace(',','.'));
    }
    fetchData();
  }, [ neighbourId, garages, netArea, rooms, suites, bathrooms, pool ]);

  return (
		<PredictionApiContext.Provider value={{ predictionData }}>
			{children}
		</PredictionApiContext.Provider>
	)
}

PredictionApiContext.displayName="PredictionApiContext";