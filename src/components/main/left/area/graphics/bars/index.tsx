// Context imports
import { useParcelsApi } from '../../../../context/api/geom/parcels';

// Third party imports
import * as d3 from 'd3';

export const Bars = ({ 
    xScale, 
    minBound, 
    maxBound, 
    innerWidth, 
    innerHeight
}: any) => {
    
    const { parcelsData } = useParcelsApi();

    if (!parcelsData) return <></>;

    const parcelAreas = parcelsData.reduce((total: any, item: any) => {
        const currentArea = item.area;
        if (currentArea < maxBound) {
            total.push(currentArea)
        }
        return total
    }, []);

    const getCountByRange = (areasArray: any, lowerBound: any, upperBound: any, step: number) => {
      let counts: any = {};
      let currentRange = lowerBound;

      while (currentRange <= upperBound) {
        const previousRange = currentRange - step;
        const filterArray = areasArray.filter((area: any) => previousRange < area && area < currentRange);
        
        counts[currentRange] = filterArray.length;
        currentRange += step;
      }
      return counts;
    }

    const step = 50;
    const areasCount = getCountByRange(parcelAreas, minBound, maxBound, step);

    const countValues: number[] = Object.values(areasCount);
    const minCount: any = d3.min(countValues)
    const maxCount: any = d3.max(countValues)

    const yScale = d3.scaleLinear()
      .domain([maxCount, minCount])
      .range([10, innerHeight]);

    const entries: any = Object.entries(areasCount);
    const currentWidth = innerWidth / entries.length;

    return (
        <>
            {Object.keys(areasCount).slice(0, -1).map((item: any, index: number) => {
                return(
                    
                    <rect
                        key={index}
                        x={xScale(item) + 1}
                        y={yScale(areasCount[item])}
                        width={currentWidth - 2}
                        height={innerHeight - yScale(areasCount[item])}
                        fill={"rgba(126, 126, 132, 0.6)"}
                    />
                )
            })}
        </>
    )
}

Bars.displayName="Bars"