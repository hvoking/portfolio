// App imports
import { LeftSizesProvider } from './left';
import { RightSizesProvider } from './right';
import { PdfSizesProvider } from './pdf';
import { MapSizesProvider } from './maps';

export const SizesProvider = ({children}: any) => {
  return (
    
    <LeftSizesProvider>
    <RightSizesProvider>
    <PdfSizesProvider>
    <MapSizesProvider>
      {children}
    </MapSizesProvider>
    </PdfSizesProvider>
    </RightSizesProvider>
    </LeftSizesProvider>
  )
}

SizesProvider.displayName="SizesProvider";