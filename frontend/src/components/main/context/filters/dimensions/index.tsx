// App imports
import { ParcelDimensionsProvider } from './parcel';
import { ModuleDimensionsProvider } from './module';
import { BuiltDimensionsProvider } from './built';
import { PolygonDimensionsProvider } from './polygon';

export const DimensionsProvider = ({ children }: any) => {
	return (
		<ParcelDimensionsProvider>
		<BuiltDimensionsProvider>
		<ModuleDimensionsProvider>
		<PolygonDimensionsProvider>
			{children}
		</PolygonDimensionsProvider>
		</ModuleDimensionsProvider>
		</BuiltDimensionsProvider>
		</ParcelDimensionsProvider>
	)
}

DimensionsProvider.displayName="DimensionsProvider";