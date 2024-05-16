// Context imports
import { useParcelsApi } from '../../../../context/api/geom/parcels';
import { useStyleSheet } from '../../../../context/filters/stylesheet';

// Third party imports
import * as d3 from 'd3';

export const Lines = ({ xScale, minBound, maxBound, innerWidth, innerHeight }: any) => {
    const { parcelsData } = useParcelsApi();
    const { linesColor, linesWidth, fillColor } = useStyleSheet();

    if (!parcelsData) return <></>;

    const parcelAreas = parcelsData.reduce((total: any, item: any) => {
        const currentArea = item.constructed_area;
        if (currentArea < maxBound) {
            total.push(currentArea)
        }
        return total
    }, []);

    const countAreas = (areas: any, lowerBound: any, upperBound: any, step: number) => {
      let counts: any = {};
      let currentRange = lowerBound;

      while (currentRange <= upperBound) {
        const count = areas.filter((area: any) => area < currentRange && area > currentRange - step).length;
        counts[currentRange] = count;
        currentRange += step;
      }
      return counts;
    }

    const step = 30;
    const areasCount = countAreas(parcelAreas, minBound, maxBound, step);

    const minCount: any = d3.min(Object.values(areasCount))
    const maxCount: any = d3.max(Object.values(areasCount))

    const yScale = d3.scaleLinear()
      .domain([ maxCount, minCount ])
      .range([ 10, innerHeight ]);

    const entries: any = Object.entries(areasCount);
    const currentWidth = innerWidth / entries.length;

    return (
        <>
            {Object.keys(areasCount).slice(0, -1).map((item: any, index: number) => {
                return(
                    
                    <rect
                        x={xScale(item) + 1}
                        y={yScale(areasCount[item])}
                        width={currentWidth - 2}
                        height={innerHeight - yScale(areasCount[item])}
                        fill={"rgba(126, 126, 132, 0.6)"}
                    />
                )
            })}
            <path
                strokeWidth={linesWidth}
                stroke={linesColor}
                fill="none"
                d={
                    `${
                        d3.line()
                            .x((d: any) => xScale(d[0]) + currentWidth / 2)
                            .y((d: any) => yScale(d[1]))
                            .curve(d3.curveNatural)
                            (entries)
                    }`
                } 
            />
        </>
    )
}

Lines.displayName="Lines"