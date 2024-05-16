// App imports
import { DrainApiProvider } from './drain';
import { ParcelsApiProvider } from './parcels';
import { CircleApiProvider } from './circle';
import { ParcelsCurvesApiProvider } from './curves/parcels';
import { ParcelCurvesApiProvider } from './curves/parcel';

export const GeomApiProvider = ({ children }: any) => {
	return (
		<CircleApiProvider>
		<ParcelsApiProvider>
		<DrainApiProvider>
		<ParcelsCurvesApiProvider>
		<ParcelCurvesApiProvider>
			{children}
		</ParcelCurvesApiProvider>
		</ParcelsCurvesApiProvider>
		</DrainApiProvider>
		</ParcelsApiProvider>
		</CircleApiProvider>
	)
}

GeomApiProvider.displayName="GeomApiProvider";