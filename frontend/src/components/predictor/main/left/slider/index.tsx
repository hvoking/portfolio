// React imports
import { useState } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Background } from './background';
import { Foreground } from './foreground';
import { Handler } from './handler';
import { Legend } from './legend';
import { Wrapper } from './wrapper';

// Context imports
import { useProperty } from '../../context/filters/property';
import { useSliderSizes } from '../../context/sizes/slider';

import * as d3 from 'd3';

export const AreaSlider = () => {
  const [ activeForeground, setActiveForeground ] = useState(false);

  const { innerWidth, innerHeight } = useSliderSizes();
  const { currentPosition, setCurrentPosition, setNetArea } = useProperty();

  const minBound = 0;
  const maxBound = 300;
  const circleRadius = innerHeight / 6;
  const offset = 20;

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ offset, innerWidth - offset ]);

  return (
      <SVGWrapper>
        <Legend 
          xScale={xScale}
          circleRadius={circleRadius} 
          currentPosition={currentPosition}
        />
        <Background
          xScale={xScale} 
          minBound={minBound} 
          maxBound={maxBound} 
          circleRadius={circleRadius}
        />
        <Foreground
          xScale={xScale} 
          minBound={minBound}
          currentPosition={currentPosition} 
          circleRadius={circleRadius}
          activeForeground={activeForeground}
        />
        <Handler
          cx={xScale(currentPosition)} 
          cy={circleRadius} 
          r={circleRadius}
        />
        <Wrapper
          xScale={xScale}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
          setCurrentPosition={setCurrentPosition}
          setNetArea={setNetArea}
          minBound={minBound}
          maxBound={maxBound}
          setActiveForeground={setActiveForeground}
        />
      </SVGWrapper>
  )
}

AreaSlider.displayName="AreaSlider";