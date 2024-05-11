// App imports
import { CurvesProvider } from './curves';
import { DrainProvider } from './drain';
import { ParcelsProvider } from './parcels';
import { PolygonLayerProvider } from './polygon';
import { EnvelopProvider } from './envelop';
import { BuildingLayerProvider } from './building';

export const LayersProvider = ({children}: any) => {
  return (
    <PolygonLayerProvider>
    <CurvesProvider>
    <DrainProvider>
    <ParcelsProvider>
    <EnvelopProvider>
    <BuildingLayerProvider>
      {children}
    </BuildingLayerProvider>
    </EnvelopProvider>
    </ParcelsProvider>
    </DrainProvider>
    </CurvesProvider>
    </PolygonLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";