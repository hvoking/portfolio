// App imports
import { ParcelListSizesProvider } from './parcelList';

export const PdfSizesProvider = ({children}: any) => {
  return (
    <ParcelListSizesProvider>
      {children}
    </ParcelListSizesProvider>
  )
}

PdfSizesProvider.displayName="PdfSizesProvider";