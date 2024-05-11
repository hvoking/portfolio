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

    const countAreas = (areas: any, lowerBound: any, upperBound: any) => {
      let counts: any = {};
      let currentRange = lowerBound;
      const step = 50;

      while (currentRange <= upperBound) {
        const count = areas.filter((area: any) => area < currentRange && area > currentRange - step).length;
        counts[currentRange] = count;
        currentRange += step;
      }
      return counts;
    }

    const countAreasObject = countAreas(parcelAreas, minBound, maxBound);

    const minCount: any = d3.min(Object.values(countAreasObject))
    const maxCount: any = d3.max(Object.values(countAreasObject))

    const yScale = d3.scaleLinear()
      .domain([ maxCount, minCount ])
      .range([ 10, innerHeight ]);

    const entries: any = Object.entries(countAreasObject);

    return (
        <>
            <path
                strokeWidth={0}
                fill={fillColor}
                d={
                    `${
                        d3.area()
                            .x((d: any) => xScale(d[0]))
                            .y0(yScale(0))
                            .y1((d: any) => yScale(d[1]))
                            .curve(d3.curveNatural)
                            (entries)
                    }`
                } 
            />
            <path
                strokeWidth={linesWidth}
                stroke={linesColor}
                fill="none"
                d={
                    `${
                        d3.line()
                            .x((d: any) => xScale(d[0]))
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