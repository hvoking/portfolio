// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useModuleDimensions } from '../../../filters/dimensions/module';
import { useBuilding } from '../../../filters/building';
import { useZoneApi } from '../zone';
import { useLotApi } from '../lot';

const BuildingApiContext: React.Context<any> = createContext(null);

export const useBuildingApi = () => {
	return (
		useContext(BuildingApiContext)
	)
}

export const BuildingApiProvider = ({children}: any) => {
  const { apartmentSide, apartmentFront, apartmentHeight } = useModuleDimensions();
  const { garages } = useBuilding();
  const { zoneData } = useZoneApi();
  const { lotData } = useLotApi();

  const [ buildingData, setBuildingData ] = useState<any>(null);

  const parcelFront = lotData && lotData.parcel_front;
  const occupancyRate = zoneData && lotData && zoneData.occupancy_rate * lotData.parcel_area;
  const zoneHeight = zoneData && zoneData.height;
  
  useEffect(() => {
    const fetchData = async () => {
      const tempUrl = `
        ${process.env.REACT_APP_API_URL}/
        building_api
        ?apartment_side=${Math.round(apartmentSide * 10) / 10}
        &apartment_front=${Math.round(apartmentFront * 10) / 10}
        &apartment_height=${Math.round(apartmentHeight * 10) / 10}
        &parcel_front=${parcelFront}
        &occupancy_rate=${occupancyRate}
        &zone_height=${zoneHeight}
        &garages=${garages}
      `;
      const url = tempUrl.replace(/\s/g, '');
      const res = await fetch(url);
      const receivedData = await res.json();
      setBuildingData(receivedData)
    }
    zoneData && lotData && fetchData();
  }, [ zoneData, lotData, apartmentSide, apartmentFront, apartmentHeight ]);

  return (
		<BuildingApiContext.Provider value={{ buildingData }}>
			{children}
		</BuildingApiContext.Provider>
	)
}

BuildingApiContext.displayName="BuildingApiContext";