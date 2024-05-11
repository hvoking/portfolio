// App imports
import { DrainApiProvider } from './drain';
import { ParcelsApiProvider } from './parcels';
import { PolygonApiProvider } from './polygon';
import { ParcelsCurvesApiProvider } from './curves/parcels';
import { ParcelCurvesApiProvider } from './curves/parcel';

export const GeomApiProvider = ({ children }: any) => {
	return (
		<PolygonApiProvider>
		<ParcelsApiProvider>
		<DrainApiProvider>
		<ParcelsCurvesApiProvider>
		<ParcelCurvesApiProvider>
			{children}
		</ParcelCurvesApiProvider>
		</ParcelsCurvesApiProvider>
		</DrainApiProvider>
		</ParcelsApiProvider>
		</PolygonApiProvider>
	)
}

GeomApiProvider.displayName="GeomApiProvider";