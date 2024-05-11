// App imports
import { PropertyProvider } from './property';
import { GeoProvider } from './geo';

export const FiltersProvider = ({children}: any) => {
  return (
    <PropertyProvider>
    <GeoProvider>
      {children}
    </GeoProvider>
    </PropertyProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";