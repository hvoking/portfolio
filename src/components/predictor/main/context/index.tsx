// Context imports
import { FiltersProvider } from './filters';
import { SizesProvider } from './sizes';

export const MainProvider = ({ children }: any) => {
	return (
		<FiltersProvider>
		<SizesProvider>
			{children}
		</SizesProvider>
		</FiltersProvider>
	)
}

MainProvider.displayName="MainProvider";