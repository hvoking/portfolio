// Context imports
import { useStyleSheet } from '../../../../context/filters/stylesheet';

export const Lot = ({ path, currentLot }: any) => {
	const { linesColor, linesWidth, fillColor } = useStyleSheet();
	return (
		<path
			fill={fillColor}
			stroke={linesColor} 
			strokeWidth={linesWidth}
			className="feature" 
			d={`${path(currentLot)}`}
		/>
	)
}

Lot.displayName="Lot";