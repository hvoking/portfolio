// App imports
import { BuildingApiProvider } from './building';
import { LotApiProvider } from './lot';
import { ZoneApiProvider } from './zone';
import { EnvelopApiProvider } from './envelop';

export const ParcelApiProvider = ({ children }: any) => {
	return (
		<LotApiProvider>
		<EnvelopApiProvider>
		<ZoneApiProvider>
		<BuildingApiProvider>
			{children}
		</BuildingApiProvider>
		</ZoneApiProvider>
		</EnvelopApiProvider>
		</LotApiProvider>
	)
}

ParcelApiProvider.displayName="ParcelApiProvider";