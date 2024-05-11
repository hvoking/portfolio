// App imports
import { SliderSizesProvider } from './slider';
import { LinesSizesProvider } from './lines';
import { CircleSizesProvider } from './circle';
import { RadiusSizesProvider } from './radius';

export const LeftSizesProvider = ({children}: any) => {
  return (
    <CircleSizesProvider>
    <SliderSizesProvider>
    <LinesSizesProvider>
    <RadiusSizesProvider>
      {children}
    </RadiusSizesProvider>
    </LinesSizesProvider>
    </SliderSizesProvider>
    </CircleSizesProvider>
  )
}

LeftSizesProvider.displayName="LeftSizesProvider";