// App imports
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { useBackgroundSizes } from '../../../context/sizes/background';
import { useScroll } from '../../../context/scroll';

import * as d3 from 'd3';

export const Grid = ({ currentMousePosition }: any) => {
    const { innerWidth, innerHeight } = useBackgroundSizes();
    const { currentSection } = useScroll();

    const colors: any = {
        "page1": "rgba(136, 115, 239, 0.4)",
        "page2": "rgba(255, 91, 46, 0.4)",
        "page3": "rgba(136, 115, 239, 0.4)",
        "page4": "rgba(255, 91, 46, 0.4)",
    }

    const gridSegment = innerWidth / 24;
    const hexagons = [];

    const angleDeg = 60;
    const radius = gridSegment / Math.sqrt(3);

    const radiusScale = d3.scaleLinear()
        .domain([0, Math.sqrt(innerWidth**2 + innerHeight**2)])
        .range([radius - 1, 0])

    let index = 0;

    const numRows = Math.ceil(innerHeight / (gridSegment * Math.sqrt(3) / 2));
    const numCols = Math.ceil(innerWidth / gridSegment) + 1;

    const handleOpacityChange = (distanceToMouse: any) => {
        // Calculate the opacity based on distance
        const maxOpacity = 0.2; // Maximum opacity for closest hexagons
        const minOpacity = 0.1; // Minimum opacity for farthest hexagons

        // Linearly interpolate between maxOpacity and minOpacity based on distance
        const opacity = maxOpacity - (maxOpacity - minOpacity) * (distanceToMouse / 250);
        return opacity;
    };

    for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows + 1; j++) {
            const xOffset = j % 2 === 0 ? 0 : gridSegment / 2;
            const x = i * gridSegment + xOffset;
            const y = j * (gridSegment * Math.sqrt(3) / 2);
            const points = [];

            const distanceToMouse = currentMousePosition ? Math.sqrt(
                (currentMousePosition.x - x)**2 + (currentMousePosition.y - y)**2
            ) : 500;

            const opacity = handleOpacityChange(distanceToMouse);

            for (let k = 0; k < 6; k++) {                
                const angleRad = (angleDeg * k - 30) * Math.PI / 180;
                const pointX = x + radiusScale(distanceToMouse) * Math.cos(angleRad);
                const pointY = y + radiusScale(distanceToMouse) * Math.sin(angleRad);
                points.push(`${pointX},${pointY}`);
            }
            hexagons.push(
                <polygon
                    className="svg-polygon"
                    key={index}
                    points={points.join(" ")}
                    fill={colors[currentSection].replace("0.4", opacity).replace("0.6", "0")}
                    stroke={colors[currentSection]}
                    strokeWidth={0.2}
                />
            );
            index++;
        }
    }

    return (
        <div className="canvas-grid-wrapper">
            <SVGWrapper>
                {hexagons}
            </SVGWrapper>
        </div>
    );
};

Grid.displayName="Grid";