// App imports
import { SVGWrapper } from './svg';
import { Lines } from './lines';
import { Foreground } from './foreground';
import { Wrapper } from './wrapper';

// Context imports
import { useParcelDimensions } from '../../../context/filters/dimensions/parcel';
import { useLinesSizes } from '../../../context/sizes/left/lines';
import { useStyleSheet } from '../../../context/filters/stylesheet';

import * as d3 from 'd3';

export const Graphics = ({ activeForeground, setActiveForeground }: any) => {
  const { innerWidth, innerHeight } = useLinesSizes();
  const { minBound, maxBound, leftPosition, setLeftPosition, rightPosition, setRightPosition } = useParcelDimensions();
  const { linesColor, linesWidth, fillColor } = useStyleSheet();

  const offset = 20;

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ offset, innerWidth - offset ]);

  return (
    <div style={{overflow: "hidden"}}>
      <SVGWrapper>
        <Lines
          xScale={xScale}
          minBound={minBound} 
          maxBound={maxBound} 
          innerWidth={innerWidth} 
          innerHeight={innerHeight} 
          linesColor={linesColor}
          linesWidth={linesWidth}
          fillColor={fillColor}
        />
        <Foreground
          xScale={xScale} 
          innerHeight={innerHeight}
          leftPosition={leftPosition} 
          rightPosition={rightPosition} 
          activeForeground={activeForeground}
          fillColor={fillColor}
        />
        <Wrapper
          xScale={xScale}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
          leftPosition={leftPosition}
          rightPosition={rightPosition}
          setLeftPosition={setLeftPosition}
          setRightPosition={setRightPosition}
          minBound={minBound}
          maxBound={maxBound}
          setActiveForeground={setActiveForeground}
        />
      </SVGWrapper>
    </div>
  )
}

Graphics.displayName="Graphics";