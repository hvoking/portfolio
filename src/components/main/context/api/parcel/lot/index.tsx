// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../../../filters/geo';

const LotApiContext: React.Context<any> = createContext(null);

export const useLotApi = () => {
	return (
		useContext(LotApiContext)
	)
}

export const LotApiProvider = ({children}: any) => {
  const { parcelId } = useGeo();
  const [ lotData, setLotData ] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const tempUrl = `
        ${process.env.REACT_APP_API_URL}/
        parcel_api
        ?parcel_id=${parcelId}
      `;
      const url = tempUrl.replace(/\s/g, '');
      const res = await fetch(url);
      const receivedData = await res.json();
      setLotData(receivedData)
    }
    fetchData();
  }, [ parcelId ]);

  return (
		<LotApiContext.Provider value={{ lotData }}>
			{children}
		</LotApiContext.Provider>
	)
}

LotApiContext.displayName="LotApiContext";