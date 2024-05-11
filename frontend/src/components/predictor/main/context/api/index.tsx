// App imports
import { PredictionApiProvider } from './prediction';
import { NeighboursApiProvider } from './neighbours';

export const ApiProvider = ({children}: any) => {
  return (
    <NeighboursApiProvider>
    <PredictionApiProvider>
      {children}
    </PredictionApiProvider>
    </NeighboursApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";