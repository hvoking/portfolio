// App imports
import { GoogleApiProvider } from './google';
import { IsoApiProvider } from './iso';
import { CnpjApiProvider } from './cnpj';
import { IsoPolygonApiProvider } from './isoPolygon';

export const ApiProvider = ({children}: any) => {
  return (
    <IsoPolygonApiProvider>
    <IsoApiProvider>
    <GoogleApiProvider>
    <CnpjApiProvider>
      {children}
    </CnpjApiProvider>
    </GoogleApiProvider>
    </IsoApiProvider>
    </IsoPolygonApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";