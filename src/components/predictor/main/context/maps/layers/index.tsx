// App imports
import { NeighboursLayerProvider } from './neighbours';

export const LayersProvider = ({children}: any) => {
  return (
    <NeighboursLayerProvider>
      {children}
    </NeighboursLayerProvider>
  )
}

LayersProvider.displayName="LayersProvider";