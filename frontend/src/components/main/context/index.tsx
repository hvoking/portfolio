// Context imports
import { MapsProvider } from './maps';
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { PdfProvider } from './pdf';

export const MainProvider = ({ children }: any) => {
	return (
		<FiltersProvider>
		<PdfProvider>
		<ApiProvider>
		<SizesProvider>
		<MapsProvider>
			{children}
		</MapsProvider>
		</SizesProvider>
		</ApiProvider>
		</PdfProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";